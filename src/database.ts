import * as Entities from './entities'

import { createConnection } from 'typeorm'
import { EntityTools } from './tools'

export class Database {
    constructor() {
        if(process.env.PG_INIT === 'true') {
            this.initialize()
            this.synchronize()
        }
    }

    private async config(entities?: any[]) {
        return createConnection({
            type: 'postgres',
            host: process.env.PG_HOST,
            port: parseInt(process.env.PG_PORT, 10),
            database: process.env.PG_NAME,
            username: process.env.PG_USER,
            password: process.env.PG_PASS,
            entities: entities ? entities : [],
            logging: process.env.PG_DEBUG === 'true',
            synchronize: true
        })
    }

    async initialize() {
        return this.config()
        .then(async connection => {
            const qr = connection.createQueryRunner()
            await qr.connect()

            await qr.query('CREATE SCHEMA IF NOT EXISTS main')
            await qr.release()

            connection.close()

            return connection
        })
    }

    async synchronize() {
        return this.config(Object.values(Entities).map(value => EntityTools.create(value)))
    }
}