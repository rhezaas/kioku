import { EntityModel } from '../models';
import { UserInterface } from '../interfaces';
import { OrderEntity, UserAccountEntity } from '.';
import { USER_ROLE } from '../enum';
export declare class UserEntity extends EntityModel implements UserInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    name: string;
    role: USER_ROLE;
    orders: OrderEntity[];
    account: UserAccountEntity;
}
