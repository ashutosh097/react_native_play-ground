import { Expense } from "../entities/Expense";

export interface ExpenseRepository {
  addExpense(expense: Expense): Promise<void>;
  getExpenses(): Promise<Expense[]>;
  clearAll(): Promise<void>;
}
