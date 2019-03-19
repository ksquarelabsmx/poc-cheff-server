import {
  IOrderProductDetails,
  IOrderProduct
} from "./../interfaces/order-product";
import { v4 as uuid } from "uuid";
import moment = require("moment");

const orderProducts: IOrderProductDetails[] = [
  {
    id: "606ffa47-a941-4982-b929-1a900273997c",
    orderId: "fefcd99e-d7fb-4189-9e8f-c9395bea5fa7",
    productId: "faa65af2-ac6d-4404-9d9d-7423f04eb740",
    quantity: 20,
    createdAt: 1548000000,
    updatedAt: 1548000000
  }
];

const find = (query?: any) => {
  if (query) {
    const [key] = Object.keys(query);
    return orderProducts.filter((user: any) => user[key] === query[key]);
  } else {
    return orderProducts;
  }
};

const save = (orderProduct: IOrderProduct): IOrderProductDetails => {
  orderProduct.id = uuid();
  const result: IOrderProductDetails = {
    ...orderProduct,
    createdAt: moment()
      .utc()
      .unix(),
    updatedAt: moment()
      .utc()
      .unix()
  };
  orderProducts.push(result);
  return result;
};

const update = (orderProduct: IOrderProduct): IOrderProductDetails => {
  const index = orderProducts.findIndex((p: any) => p.id === orderProduct.id);
  (<any>orderProducts)[index] = {
    ...(<any>orderProducts)[index],
    ...orderProduct
  };
  return (<any>orderProducts)[index];
};

export const orderProductsDataSource = { find, save, update };
