import { Expense } from "../entities/Expense";
import { ExpenseRepository } from "../repositories/ExpenseRepo";

export class AddExpense {
  constructor(private repo: ExpenseRepository) {}

  async execute(expense: Expense) {
    return this.repo.addExpense(expense);
  }
}
