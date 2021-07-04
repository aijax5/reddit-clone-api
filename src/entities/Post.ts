import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
// eslint-disable-next-line import/prefer-default-export
export class Post {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ type: 'text' })
  title!: string;

  @Field()
  @Property({ type: 'date' })
  createdAt = new Date();

  @Field()
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}
