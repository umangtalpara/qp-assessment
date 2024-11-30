import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GroceryService } from '../grocery/grocery.service';

@Controller('user')
export class UserController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get('groceries')
  async getAvailableGroceries() {
    const groceries = await this.groceryService.getAllGroceries();
    return groceries.filter((grocery) => grocery.stock > 0);
  }

  @Post('orders')
  async placeOrder(
    @Body()
    orderDto: {
      items: { id: number; quantity: number }[];
    },
  ) {
    const { items } = orderDto;

    if (!items || items.length === 0) {
      throw new HttpException(
        'Order must include at least one item',
        HttpStatus.BAD_REQUEST,
      );
    }

    const orderSummary = await this.groceryService.bookGroceries(items);

    return orderSummary;
  }
}
