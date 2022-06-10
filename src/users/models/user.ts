import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  email: string;

  @Field()
  @IsOptional()
  vendorId?: string;

  @Field()
  accountType: AccountType;
}

export enum AccountType {
  Customer = 'customer',
  Vendor = 'vendor',
  Admin = 'admin',
}
