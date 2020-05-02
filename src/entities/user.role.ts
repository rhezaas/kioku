import { EntityModel } from '../models'
import { UserRoleInterface } from '../interfaces'

import {
    Column,
    ManyToOne,
    JoinColumn,
    PrimaryColumn
} from 'typeorm'

import { UserEntity } from '.'

export class UserRoleEntity extends EntityModel implements UserRoleInterface {
    public static entity = {
        schema: 'main',
        name: 'user_role'
    }

    @PrimaryColumn({
        nullable: false
    })
    user_id: number

    @Column({
        type: 'varchar'
    })
    role: string

    // Relations
    @ManyToOne(() => UserEntity, user => user.roles)
    @JoinColumn({
        name: 'user_id'
    })
    user: UserEntity
}