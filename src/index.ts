/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved

import { MikroORM } from '@mikro-orm/core';
import express from 'express';
// eslint-disable-next-line import/no-unresolved
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import mikroConfig from './mikro-orm.config';
import { Post } from './entities/Post';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/posts';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      validate: false,
      resolvers: [HelloResolver, PostResolver],
    }),
    context: () => ({ em: orm.em }),
  });

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log('started server on http://locahost:4000');
  });
};
main().catch((err) => {
  console.log(err);
});
