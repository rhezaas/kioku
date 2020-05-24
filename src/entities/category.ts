import { EntityModel } from '../models'
import { CategoryInterface } from '../interfaces'

import {
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    ManyToOne,
    JoinColumn,
} from 'typeorm'

import { ItemEntity } from '.'

export class CategoryEntity extends EntityModel implements CategoryInterface {
    public static entity = {
        schema: 'main',
        name: 'category'
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        nullable: true
    })
    category_id: number

    @Column({
        nullable: false
    })
    name: string

    // Relations
    @OneToMany(() => ItemEntity, items => items.category)
    items: ItemEntity[]

    @OneToMany(() => CategoryEntity, category => category.category_ids)
    category: CategoryEntity[]

    @ManyToOne(() => CategoryEntity, category_ids => category_ids.category)
    @JoinColumn({
        name: 'category_id'
    })
    category_ids: CategoryEntity

}