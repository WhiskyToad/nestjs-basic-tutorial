import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user';
import { GetUserArgs } from './DTO/args/getUser.args';
import { CreateUserInput } from './DTO/args/input/createUser.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: false })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser(getUserArgs);
  }

  @Mutation(() => User)
  createUser(@Args('CreateUserInput') createUserData: CreateUserInput) {
    return this.usersService.createUser(createUserData);
  }
}
