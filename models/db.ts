import { Pool } from "pg";

let globalPool: Pool;

export function getDb() {
  if (!globalPool) {
    const connectionString = process.env.POSTGRES_URL;
    console.log("connectionString2", connectionString);

    globalPool = new Pool({
      connectionString,
    });
  }

  return globalPool;
}
