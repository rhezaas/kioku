import { ORDER_STATUS } from '../enum'

export interface OrderInterface {
    id: number,
    created_at: Date,
    user_id: number,
    total: number,
    status: ORDER_STATUS,
    cancelled_at: Date
}