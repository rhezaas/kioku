import { EntityModel } from 'models';
import { OrderItemInterface } from 'interfaces';
import { OrderEntity, ItemEntity } from 'entities';
export declare class OrderItemEntity extends EntityModel implements OrderItemInterface {
    static entity: {
        schema: string;
        name: string;
    };
    order_id: number;
    item_id: number;
    order: OrderEntity;
    item: ItemEntity;
}
