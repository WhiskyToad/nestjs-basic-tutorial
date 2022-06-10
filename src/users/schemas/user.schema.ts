import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { AccountType } from '../models/user';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Field()
  email: string;

  @Field()
  @IsOptional()
  vendorId?: string;

  @Field()
  accountType: AccountType;
}

export const UserSchema = SchemaFactory.createForClass(User);
