import { EntityModel } from '../models'
import { OrderInterface } from '../interfaces'

import {
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm'

import {
    UserEntity,
    OrderItemEntity
} from "."

export class OrderEntity extends EntityModel implements OrderInterface {
    public static entity = {
        schema: 'main',
        name: 'order'
    }
    
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    created_at: Date

    @Column({
        nullable: false
    })
    user_id: number

    @Column({
        nullable: false
    })
    total: number

    @Column()
    cancelled_at: Date

    // Relations
    @ManyToOne(() => UserEntity, user => user.orders)
    @JoinColumn({
        name: 'user_id'
    })
    user: UserEntity

    @OneToMany(() => OrderItemEntity, orderItems => orderItems.order)
    orderItems: OrderItemEntity[]
}