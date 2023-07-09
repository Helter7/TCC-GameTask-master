import { Goal } from '../models/goal.model';
import { TransactionService } from './transaction.service';

export class GoalService {
  table = 'goal';
  /**
   * @param {TransactionService} transactionService
   */
  constructor(transactionService) {
    this.transactionService = transactionService;
  }

  /**
   * @param {Goal} goal
   * @returns {unknown}
   */
  async insert(goal) {
    const { description, deadline } = goal;
    console.log('############################');
    console.log(description);
    console.log(deadline);
    console.log('############################');
    try {
      const { insertId } = await this.transactionService.execute(
        `insert into ${this.table} (description, deadline)
        values (?,?)`,
        [description, deadline],
      );
      console.log('goal inserido!!!!');
      return insertId;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @param {Goal} goal
   * @returns {unknown}
   */
  async update(goal) {
    const { id, description, deadline } = goal;
    try {
      const { insertId } = await this.transactionService.execute(
        `update ${this.table} set description = ?, deadline = ? where id = ?`,
        [description, deadline, id],
      );
      console.log('goal alterado!!!!');
      return insertId;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @returns {Promise<Array<Goal>>}
   */
  async findAll() {
    try {
      const result = await this.transactionService.execute(
        `select * from ${this.table}`,
      );
      return result.rows._array;
    } catch (error) {
      console.error(error);
    }
  }

  async findWithId(id) {
    try {
      const result = await this.transactionService.execute(
        `select * from ${this.table} where id = ?`,
        [id],
      );
      return result.rows._array;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteById(id) {
    try {
      const result = await this.transactionService.execute(
        `DELETE FROM ${this.table}
        WHERE id = ?`,
        [id],
      );
      console.log();
      console.log(JSON.stringify(result, null, 2));
      console.log();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
