import { EntityModel } from '../models'
import { UserInterface } from '../interfaces'

import {
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from 'typeorm'

import {
    OrderEntity,
} from '.'

import {
    ROLES,
} from '../enum'

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
        type: 'varchar',
        length: 512,
        nullable: true,
    })
    password: string

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false,
    })
    token: string

    @Column({
        type: 'enum',
        enum: Object.keys(ROLES)
    })
    role: ROLES

    // Relations
    @OneToMany(() => OrderEntity, orders => orders.user)
    orders: OrderEntity[]
}