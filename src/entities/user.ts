import { EntityModel } from '../models'
import { UserInterface } from '../interfaces'

import {
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    OneToOne
} from 'typeorm'

import {
    OrderEntity,
    UserRoleEntity,
    UserAccountEntity
} from '.'

export class UserEntity extends EntityModel implements UserInterface {
    public static entity = {
        schema: 'main',
        name: 'user'
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        nullable: false
    })
    name: string

    // Relations
    @OneToMany(() => OrderEntity, orders => orders.user)
    orders: OrderEntity[]

    @OneToMany(() => UserRoleEntity, roles => roles.user)
    roles: UserRoleEntity[]
    
    @OneToOne(() => UserAccountEntity, account => account.user)
    account: UserAccountEntity
}