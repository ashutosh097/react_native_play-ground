import RNFS from "react-native-fs";
import { DB_NAME } from "../data/db";

const dbPath = `${RNFS.DocumentDirectoryPath}/${DB_NAME}`;
const backupDir = `${RNFS.DocumentDirectoryPath}/backups`;

async function ensureBackupDir() {
  const exists = await RNFS.exists(backupDir);
  if (!exists) await RNFS.mkdir(backupDir);
}

export async function backupDatabase(): Promise<string> {
  await ensureBackupDir();
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const dest = `${backupDir}/backup-${timestamp}.db`;
  await RNFS.copyFile(dbPath, dest);
  return dest;
}

export async function listBackups(): Promise<string[]> {
  await ensureBackupDir();
  return RNFS.readDir(backupDir).then(entries => entries.map(e => e.path));
}

export async function restoreDatabase(backupPath: string): Promise<void> {
  await RNFS.copyFile(backupPath, dbPath);
}
