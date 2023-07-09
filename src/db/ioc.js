import * as SQLite from 'expo-sqlite';
import { DatabaseInit } from './database-init';
import { GoalService } from './services/goal.service';
import { TaskService } from './services/task.service';
import { TransactionService } from './services/transaction.service';

const db = SQLite.openDatabase('database.db');
export const database = new DatabaseInit(db);
const transactionService = new TransactionService(db);

export const goalService = new GoalService(transactionService);
export const taskService = new TaskService(transactionService);
