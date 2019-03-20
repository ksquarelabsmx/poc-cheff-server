import {
  IOrder,
  IOrderDTO,
  IOrderDetailsDTO,
  IOrderDetails
} from "./../interfaces/order";

const toEntity = (orderDTO: IOrderDTO): IOrder => {
  return {
    id: orderDTO.id,
    userId: orderDTO.user_id,
    eventId: orderDTO.event_id,
    price: orderDTO.price,
    orderProductId: orderDTO.order_product_id,
    createdBy: orderDTO.created_by
  };
};

const toDTO = (orderEntity: IOrderDetails): IOrderDetailsDTO => {
  return {
    id: orderEntity.id,
    user_id: orderEntity.userId,
    event_id: orderEntity.eventId,
    price: orderEntity.price,
    order_product_id: orderEntity.orderProductId,
    created_at: orderEntity.createdAt,
    updated_at: orderEntity.updatedAt,
    created_by: orderEntity.createdBy,
    paid: orderEntity.paid,
    cancelled: orderEntity.cancelled
  };
};

export const orderMapper = {
  toEntity,
  toDTO
};
