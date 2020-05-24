import { ROLES } from '../enum'

export interface UserInterface {
    id: number,
    name: string,
    password: string,
    token: string,
    role: ROLES
}