import { ConnectionOptions } from 'typeorm'
import { Group, ToDo, User } from '@/entry';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3304,
  username: 'user',
  password: '123456',
  database: 'todolist',
  dropSchema: false,
  entities: [Group, ToDo, User],
  extra:{
    charset: 'utf8_unicode_ci',
  },
} as ConnectionOptions;


