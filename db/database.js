import mysql from 'mysql2'
import {config} from '../config.js'
// ceatePool: 미리 만들어놓고 연결정보를 가지고 있다가 바로 재활용
const pool = mysql.createPool({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
})

export const db = pool.promise()