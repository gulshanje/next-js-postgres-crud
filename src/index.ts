import { onDatabaseConnected } from "./config/knex";

onDatabaseConnected()
.then(() => console.log("database is connected "))
.catch((e) => console.error(e));