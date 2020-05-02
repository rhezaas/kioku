import { EntityModel } from 'models';
import { OrderInterface } from 'interfaces';
import { UserEntity } from "./user";
import { OrderItemEntity } from './order.item';
export declare class OrderEntity extends EntityModel implements OrderInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    created_at: Date;
    user_id: number;
    total: number;
    cancelled_at: Date;
    user: UserEntity;
    orderItems: OrderItemEntity[];
}