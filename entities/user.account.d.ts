import { EntityModel } from '../models';
import { UserAccountInterface } from '../interfaces';
import { UserEntity } from '.';
export declare class UserAccountEntity extends EntityModel implements UserAccountInterface {
    static entity: {
        schema: string;
        name: string;
    };
    user_id: number;
    password: string;
    token: string;
    user: UserEntity;
}
