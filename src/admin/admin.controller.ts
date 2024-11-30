import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { GroceryService } from '../grocery/grocery.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly groceryService: GroceryService) {}

  @Post('add')
  async addGrocery(
    @Body()
    createGroceryDto: {
      name: string;
      sku: string;
      price: number;
      stock: number;
    },
  ) {
    return await this.groceryService.addGrocery(createGroceryDto);
  }

  @Get('groceries')
  async getGroceries() {
    return await this.groceryService.getAllGroceries();
  }

  @Patch('update/:id')
  async updateGrocery(
    @Param('id') id: number,
    @Body() updateGroceryDto: { name?: string; price?: number; stock?: number },
  ) {
    return await this.groceryService.updateGrocery(id, updateGroceryDto);
  }

  @Delete('delete/:id')
  async deleteGrocery(@Param('id') id: number) {
    return await this.groceryService.deleteGrocery(id);
  }
}
