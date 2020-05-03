import { USER_ROLE } from '../enum'

export interface UserInterface {
    id: number,
    name: string,
    role: USER_ROLE
}