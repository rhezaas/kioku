import { EntityModel } from '../models';
import { UserInterface } from '../interfaces';
import { OrderEntity, UserAccountEntity } from '.';
import { ROLES } from '../enum';
export declare class UserEntity extends EntityModel implements UserInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    name: string;
    role: ROLES;
    orders: OrderEntity[];
    account: UserAccountEntity;
}
