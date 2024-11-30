import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import  { GroceryModule } from '../grocery/grocery.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [GroceryModule]
})
export class UserModule {}
