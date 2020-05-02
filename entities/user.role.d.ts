import { EntityModel } from 'models';
import { UserRoleInterface } from 'interfaces';
import { UserEntity } from 'entities';
export declare class UserRoleEntity extends EntityModel implements UserRoleInterface {
    static entity: {
        schema: string;
        name: string;
    };
    user_id: number;
    role: string;
    user: UserEntity;
}
