import { EntityModel } from '../models'
import { OrderItemInterface } from '../interfaces'

import {
    ManyToOne,
    JoinColumn,
    PrimaryColumn
} from 'typeorm'

import {
    OrderEntity,
    ItemEntity
} from '.'

export class OrderItemEntity extends EntityModel implements OrderItemInterface {
    public static entity = {
        schema: 'main',
        name: 'order_item'
    }

    @PrimaryColumn({
        nullable: false
    })
    order_id: number

    @PrimaryColumn({
        nullable: false
    })
    item_id: number

    // Relations
    @ManyToOne(() => OrderEntity, order => order.orderItems)
    @JoinColumn({
        name: 'order_id'
    })
    order: OrderEntity

    @ManyToOne(() => ItemEntity, item => item.itemOrders)
    @JoinColumn({
        name: 'item_id'
    })
    item: ItemEntity
}