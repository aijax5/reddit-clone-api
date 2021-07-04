import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
// eslint-disable-next-line import/prefer-default-export
export class Post {
  @PrimaryKey()
  id!: number;

  @Property({ type: 'text' })
  title!: string;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt = new Date();
}
