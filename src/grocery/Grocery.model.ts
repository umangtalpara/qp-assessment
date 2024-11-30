import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Grocery extends Model {
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  sku: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  price: number;

  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  stock: number;
}
