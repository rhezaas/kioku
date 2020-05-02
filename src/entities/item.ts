import { EntityModel } from '../models'
import { ItemInterface } from '../interfaces'

import {
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
} from 'typeorm'

import {
    OrderItemEntity,
    CategoryEntity
} from '.'

export class ItemEntity extends EntityModel implements ItemInterface {
    public static entity = {
        schema: 'main',
        name: 'item'
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: false
    })
    category_id: number

    @Column({
        type: 'varchar',
        nullable: false
    })
    name: string

    @Column({
        nullable: false
    })
    price: number

    // Relations
    @OneToMany(() => OrderItemEntity, itemOrders => itemOrders.item)
    itemOrders: OrderItemEntity[]

    @ManyToOne(() => CategoryEntity, category => category.items)
    category: CategoryEntity

}