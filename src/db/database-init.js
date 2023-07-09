import * as SQLite from 'expo-sqlite';
export class DatabaseInit {
  /**
   * @param {SQLite.WebSQLDatabase} db
   */
  constructor(db) {
    this.db = db;
  }

  async exec() {
    await new Promise((resolve) => {
      this.db.exec(
        [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }],
        false,
        (error, result) => {
          console.log('Foreign keys turned on');
          resolve();
        },
      );
    });
    await this.initDb();
  }

  async initDb() {
    var sql = [
      `drop table if exists goal`,
      `drop table if exists task`,

      `create table if not exists goal (
        id integer primary key autoincrement,
        description text,
        deadline text
      );`,

      `create table if not exists task (
        id integer primary key autoincrement,
        code text,
        description text,
        is_completed integer,
        goal_id integer,
        FOREIGN KEY(goal_id) REFERENCES goal(id) on delete cascade
      );`,

      `insert into goal (description,deadline) values ("fazer hamburguer", "2023-07-04");`,
      `insert into goal (description,deadline) values ("fazer limonada", "2023-07-04");`,

      `insert into task (code,description,is_completed,goal_id)
      values ("yuiop", "pegar ingrdientes", 1, 2),("kyujth", "pegar utensílios", 0, 2),("uktr", "expremer limoes", 0, 2);`,

      `insert into task (code,description,is_completed,goal_id)
      values ("ewrfd", "pegar ingrdientes", 1, 1),("rthg", "pegar utensílios", 0, 1),("tyj", "fritar hamburguer", 0, 1);`,
    ];

    return new Promise((resolve) =>
      this.db.transaction(
        (tx) => {
          for (var i = 0; i < sql.length; i++) {
            console.log('execute sql : ' + sql[i]);
            tx.executeSql(sql[i]);
          }
        },
        (error) => {
          console.log('error call back : ' + JSON.stringify(error));
          console.log(error);
        },
        () => {
          console.log('transaction complete call back ');
          resolve('Done');
        },
      ),
    );
  }
}
