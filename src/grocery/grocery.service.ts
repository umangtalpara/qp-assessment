import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Grocery } from './Grocery.model';

@Injectable()
export class GroceryService {
  constructor(
    @InjectModel(Grocery)
    private groceryModel: typeof Grocery,
  ) {}

  async addGrocery(createGroceryDto: { name: string;  sku: string; price: number; stock: number }) {
    const { name, sku, price, stock } = createGroceryDto;
    const grocery = await this.groceryModel.create({ name, sku, price, stock });
    return grocery;
  }

  async getAllGroceries() {
    return await this.groceryModel.findAll();
  }

  async getGroceryById(id: number) {
    const grocery = await this.groceryModel.findByPk(id);
    if (!grocery) {
      throw new NotFoundException(`Grocery item with ID ${id} not found`);
    }
    return grocery;
  }

  async updateGrocery(id: number, updateGroceryDto: { name?: string; price?: number; stock?: number }) {
    const grocery = await this.getGroceryById(id);
    return await grocery.update(updateGroceryDto);
  }

  async deleteGrocery(id: number) {
    const grocery = await this.getGroceryById(id);
    await grocery.destroy();
    return { message: `Grocery item with ID ${id} deleted successfully` };
  }

  async bookGroceries(order: { id: number; quantity: number }[]) {
    const orderSummary = [];

    for (const item of order) {
      const grocery = await this.getGroceryById(item.id);
      if (grocery.stock < item.quantity) {
        throw new NotFoundException(
          `Not enough stock for grocery item with ID ${item.id}. Available stock: ${grocery.stock}`,
        );
      }

      await grocery.update({ stock: grocery.stock - item.quantity });

      orderSummary.push({
        id: grocery.id,
        name: grocery.name,
        price: grocery.price,
        quantity: item.quantity,
        total: grocery.price * item.quantity,
      });
    }

    return {
      message: 'Order placed successfully',
      orderSummary,
    };
  }
}
