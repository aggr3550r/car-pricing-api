import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type: "sqlite",
    database: 'db.new',
    entities: ['dist/**/*entity.js'],
    // entities: process.env.NODE_ENV === 'development' ? ['**/*.entity.js'] : ['**/*.entity.ts'],
    synchronize: false,
    // migrations: [
    //     'dist/'
    // ]
};

export default config;