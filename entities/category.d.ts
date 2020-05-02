import { EntityModel } from '../models';
import { CategoryInterface } from '../interfaces';
import { ItemEntity } from '.';
export declare class CategoryEntity extends EntityModel implements CategoryInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    name: string;
    items: ItemEntity[];
}
