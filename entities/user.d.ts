import { EntityModel } from 'models';
import { UserInterface } from 'interfaces';
import { OrderEntity, UserRoleEntity, UserAccountEntity } from 'entities';
export declare class UserEntity extends EntityModel implements UserInterface {
    static entity: {
        schema: string;
        name: string;
    };
    id: number;
    name: string;
    orders: OrderEntity[];
    roles: UserRoleEntity[];
    account: UserAccountEntity;
}
