import { EntityModel } from '../models';
import { ItemInterface } from '../interfaces';
import { OrderItemEntity, CategoryEntity } from '.';
export declare class ItemEntity extends EntityModel implements ItemInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    itemOrders: OrderItemEntity[];
    category: CategoryEntity;
}
