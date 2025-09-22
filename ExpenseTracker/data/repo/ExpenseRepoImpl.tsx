import { Expense } from "../../domain/entities/Expense";
import { ExpenseRepository } from "../../domain/repositories/ExpenseRepo";
import { getDb } from "../db.tsx";

 class ExpenseRepositoryImpl implements ExpenseRepository {
  async addExpense(expense: Expense): Promise<void> {
    const db = await getDb();
    await db.executeSql(
      "INSERT INTO expenses (title, category, amount, createdAt) VALUES (?,?,?,?)",
      [expense.title, expense.category, expense.amount, expense.createdAt]
    );
  }

  async getExpenses(): Promise<Expense[]> {
    const db = await getDb();
    const results = await db.executeSql("SELECT * FROM expenses ORDER BY createdAt DESC");
    const rows = results[0].rows;
    const expenses: Expense[] = [];
    for (let i = 0; i < rows.length; i++) {
      expenses.push(rows.item(i));
    }
    return expenses;
  }

  async clearAll(): Promise<void> {
    const db = await getDb();
    await db.executeSql("DELETE FROM expenses");
  }
}
export { ExpenseRepositoryImpl };
