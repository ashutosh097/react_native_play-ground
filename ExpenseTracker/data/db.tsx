
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const DB_NAME = "expenses.db";
let _db: SQLite.SQLiteDatabase | null = null;

export async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (_db) return _db;
  _db = await SQLite.openDatabase({ name: DB_NAME, location: "default" });
  await _db.executeSql(
    `CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      category TEXT,
      amount REAL,
      createdAt TEXT
    );`
  );
  return _db;
}
