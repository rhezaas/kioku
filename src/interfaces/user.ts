import { ROLES } from '../enum'

export interface UserInterface {
    id: number,
    name: string,
    role: ROLES
}