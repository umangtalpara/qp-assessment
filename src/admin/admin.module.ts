import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import  { GroceryModule } from '../grocery/grocery.module';

@Module({
  providers: [AdminService],
  controllers: [AdminController],
  imports: [GroceryModule]
})
export class AdminModule {}
