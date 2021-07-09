import { ConnectionOptions } from 'typeorm'
import { Group, ToDo, User } from '@/entry';
import {init1624953702083} from '@/migration';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '123456',
  database: 'toDoList',
  dropSchema: false,
  entities: [Group, ToDo, User],
  migrationsRun: false,
  migrations: [init1624953702083],
  extra: {
    charset: 'utf8_unicode_ci',
  },
} as ConnectionOptions;


