import { Task } from '../models/task.model';
import { TransactionService } from './transaction.service';

export class TaskService {
  table = 'task';
  /**
   * @param {TransactionService} transactionService
   */
  constructor(transactionService) {
    this.transactionService = transactionService;
  }

  /**
   * @param {Task} task
   * @returns {unknown}
   */
  async insert(task) {
    const { code, description, is_completed, goal_id } = task;
    try {
      const { result } = await this.transactionService.execute(
        `insert into ${this.table} (code, description, is_completed, goal_id)
        values (?, ? ,? ,?)`,
        [code, description, is_completed, goal_id],
      );
      console.log('task inserida!!!!');
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * @param {Task} task
   * @returns {unknown}
   */
  async insertWithGoalId(task) {
    const { code, description, is_completed, goal_id } = task;
    try {
      const { result } = await this.transactionService.execute(
        `insert into ${this.table} (code, description, is_completed, goal_id)
      values (?, ? ,? ,?)`,
        [code, description, is_completed, goal_id],
      );
      console.log('task alterada!!!!');
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  /**
   * @param {Task} task
   * @returns {unknown}
   */
  async toogleCompleted(task) {
    const { id } = task;
    try {
      const { insertId } = await this.transactionService.execute(
        `update ${this.table} set is_completed = 1 where id = ?`,
        [id],
      );
      console.log('task concluida!!!!');
      return insertId;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * @returns {Promise<Array<Task>>}
   */
  async findAll() {
    console.log('ESTOU AQUI!!!');
    try {
      const result = await this.transactionService.execute(
        `select * from ${this.table}`,
      );
      return result.rows._array;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteAllWithGoalId(goal_id) {
    try {
      const result = await this.transactionService.execute(
        `DELETE FROM ${this.table}
        WHERE goal_id = ?`,
        [goal_id],
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}
