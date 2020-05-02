export interface OrderInterface {
    id: number,
    created_at: Date,
    user_id: number,
    total: number,
    cancelled_at: Date
}