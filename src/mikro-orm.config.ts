import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { __prod__ } from './constants';
import { Post } from './entities/Post';

export default {
  dbName: 'lireddit',
  type: 'postgresql',
  debug: !__prod__,
  entities: [Post],
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
}as Parameters<typeof MikroORM.init>[0];
