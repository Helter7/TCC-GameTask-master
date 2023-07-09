import * as SQLite from 'expo-sqlite';

export class TransactionService {
  /**
   * @param {SQLite.WebSQLDatabase} database
   */
  constructor(database) {
    this.database = database;
  }

  /**
   * @param {string} sqlStatement
   * @param {Array<string | number | boolean | null>} args
   */
  async execute(sqlStatement, args = []) {
    return new Promise((resolve) =>
      this.database.transaction(
        (transaction) => {
          transaction.executeSql(sqlStatement, args, (_, result) => {
            resolve(result);
          }),
            (_, err) => {
              throw new Error(err);
            };
        },
        (err) => {
          throw new Error(err);
        },
      ),
    );
  }
}
