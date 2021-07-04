/* eslint-disable import/prefer-default-export */
import { Resolver, Query } from 'type-graphql';

@Resolver()
export class HelloResolver {
  @Query(() => String)
  hello() {
    return 'Bye!';
  }
}
