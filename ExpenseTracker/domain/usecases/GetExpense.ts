import { ExpenseRepository } from "../repositories/ExpenseRepo";

export class GetExpenses {
  constructor(private repo: ExpenseRepository) {}

  async execute() {
    return this.repo.getExpenses();
  }
}
