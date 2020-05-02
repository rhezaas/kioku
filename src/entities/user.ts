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
    UserAccountEntity
} from '.'

import {
    USER_ROLE,
} from '../tools'

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

    @Column({
        type: 'enum',
        enum: Object.keys(USER_ROLE)
    })
    role: USER_ROLE

    // Relations
    @OneToMany(() => OrderEntity, orders => orders.user)
    orders: OrderEntity[]
    
    @OneToOne(() => UserAccountEntity, account => account.user)
    account: UserAccountEntity
}