import { EntityModel } from '../models';
import { UserInterface } from '../interfaces';
import { OrderEntity } from '.';
import { ROLES } from '../enum';
export declare class UserEntity extends EntityModel implements UserInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    name: string;
    password: string;
    token: string;
    role: ROLES;
    orders: OrderEntity[];
}
