import { EntityModel } from 'models'
import { Entity } from 'typeorm'

export class EntityTools {
    public static create(model: typeof EntityModel) {
        const {
            schema,
            name
        } = model.entity

        Entity({schema, name})(model)

        return model
    }
}