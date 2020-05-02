import { EntityModel } from '../models'
import { CategoryInterface } from '../interfaces'

import {
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
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
        nullable: false
    })
    name: string

    // Relations
    @OneToMany(() => ItemEntity, items => items.category)
    items: ItemEntity[]

}