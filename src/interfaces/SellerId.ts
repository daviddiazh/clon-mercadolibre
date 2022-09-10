export interface ISellerId {
    id?: string | number;
    nickname?: string;
    address?: {
        city?: string;
        state?: string;
    },
    user_type?: string;
    logo?: string | null;
    points?: number | null;
    seller_reputation?: {
        level_id?: string;
        power_seller_status?: string;
        transactions?: {
            canceled?: number | null;
            completed?: number | null;
            ratings?: {
                negative?: number | null;
                neutral?: number | null;
                positive?: number | null;
            },
            total?: number | null;
        }
    }
}