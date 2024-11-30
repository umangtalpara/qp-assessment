import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Grocery } from './Grocery.model';
import { GroceryService } from './grocery.service';
import { GroceryController } from './grocery.controller';

@Module({
  imports: [SequelizeModule.forFeature([Grocery])],
  controllers: [GroceryController],
  providers: [GroceryService],
  exports: [GroceryService],
})
export class GroceryModule {}
