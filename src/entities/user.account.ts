import { EntityModel } from 'models'
import { UserAccountInterface } from 'interfaces'

import {
    Column,
    OneToOne,
    JoinColumn,
    PrimaryColumn
} from 'typeorm'

import {
    UserEntity
} from 'entities'

export class UserAccountEntity extends EntityModel implements UserAccountInterface {
    public static entity = {
        schema: 'main',
        name: 'user_account'
    }

    @PrimaryColumn()
    user_id: number

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string

    // Relations
    @OneToOne(() => UserEntity, user => user.account)
    @JoinColumn({
        name: 'user_id'
    })
    user: UserEntity
    
}