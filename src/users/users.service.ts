import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GetUserArgs } from './DTO/args/getUser.args';
import { CreateUserInput } from './DTO/args/input/createUser.input';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    const createdUser = new this.userModel(createUserData);
    return createdUser.save();
  }
  public getUser(getUserArgs: GetUserArgs): User {
    //find user
    return;
  }
}
