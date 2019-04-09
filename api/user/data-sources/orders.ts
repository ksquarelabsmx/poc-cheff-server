import * as cuid from "cuid";
import { IOrder } from "../models/order";

const orders: IOrder[] = [
  {
    id: "1",
    created_at: 1554736045107,
    event_id: "1",
    products: [
      {
        id: "1",
        name: "Poc Chuc Torta",
        price: 25,
        created_at: 1554736045107,
        quantity: 2,
        subtotal: 50
      }
    ],
    total: 50,
    cancelled: false
  },
  {
    id: "2",
    event_id: "2",
    created_at: 1554736045107,
    products: [
      {
        id: "1",
        name: "Poc Chuc Torta",
        price: 25,
        created_at: 1554736045107,
        quantity: 2,
        subtotal: 50
      },
      {
        id: "2",
        name: "Shrimp Torta",
        price: 25,
        created_at: 1554736045107,
        quantity: 2,
        subtotal: 50
      }
    ],
    total: 100,
    cancelled: false
  }
];

interface IFindQuery {
  id?: string;
}

export const find = (query: IFindQuery = {}): Promise<IOrder[]> => {
  if (query.id) {
    const docs = orders.filter(order => order.id === query.id);
    return Promise.resolve(docs);
  }

  return Promise.resolve(orders);
};

export const save = (order: IOrder): Promise<IOrder> => {
  const newOrder = {
    ...order,
    id: cuid()
  };
  orders.push(newOrder);
  return Promise.resolve(newOrder);
};

export const update = (order: IOrder): Promise<IOrder> => {
  const index = orders.findIndex(oldOrder => {
    return oldOrder.id === order.id;
  });

  orders[index] = order;
  return Promise.resolve(order);
};
