import { ConnectionOptions } from 'typeorm'

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3304,
  username: 'user',
  password: '123456',
  database: 'todolist',
  dropSchema: false,
  entities: [],
  extra:{
    charset: 'utf8_unicode_ci',
  },
} as ConnectionOptions;


