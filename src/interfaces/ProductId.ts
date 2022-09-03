export interface ProductId {
    id?: string;
    site_id?: string;
    title?: string;
    subtitle?: any;
    seller_id?: number;
    category_id?: string;
    official_store_id?: number;
    price?: number;
    base_price?: number;
    original_price?: number;
    currency_id?: string;
    initial_quantity?: number;
    available_quantity?: number;
    sold_quantity?: number;
    sale_terms?: [];
    buying_mode?: string;
    listing_type_id?: string;
    start_time?: string;
    stop_time?: string;
    condition?: string;
    permalink?: string;
    thumbnail_id?: string;
    thumbnail?: string;
    secure_thumbnail?: string;
    pictures?: Pictures[];
    accepts_mercadopago?: boolean;
    international_delivery_mode?: string;
    seller_address?: Seller_address;
    attributes?: Attribute[];
    warnings?: any[];
    listing_source?:  string;
    variations?: any[];
    status?: string;
    sub_status?: any[];
    tags?: string[];
    warranty?: string;
    catalog_product_id?: string;
    domain_id?: string;
    parent_item_id?: any;
    differential_pricing?: any;
    deal_ids?: string[];
    automatic_relist?: boolean;
    date_created?: Date;
    last_updated?: Date;
    health?: number;
    catalog_listing?: boolean;
    channels?: string[];
}

export interface Pictures{
    id?: string,
    url?: string,
    secure_url?: string,
    size?: string,
    max_size?: string,
    quality?: string | number,
}

export interface Seller_address {
    city?: {
        id?: string,
        name?: string,
    },
    state?: {
        id?: string,
        name?: string,
    },
    country?: {
        id?: string,
        name?: string,
    },
    search_location?: {
        neighborhood: {
            id?: string,
            name?: string,
        },
        city?: {
            id?: string,
            name?: string,
        },
        state?: {
            id?: string,
            name?: string,
        }
    },
    id?: number,
}

export interface Attribute {
    id:                   string;
    name:                 string;
    value_id:             null;
    value_name:           string;
    value_struct:         null;
    values:               any[];
    attribute_group_id:   string;
    attribute_group_name: string;
}