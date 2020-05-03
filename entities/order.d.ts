import { EntityModel } from '../models';
import { OrderInterface } from '../interfaces';
import { UserEntity, OrderItemEntity } from '.';
import { ORDER_STATUS } from '../enum';
export declare class OrderEntity extends EntityModel implements OrderInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    created_at: Date;
    user_id: number;
    total: number;
    status: ORDER_STATUS;
    cancelled_at: Date;
    user: UserEntity;
    orderItems: OrderItemEntity[];
}
