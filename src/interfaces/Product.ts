export interface IProduct {
    site_id?: string | number,
    country_default_time_zone?: string,
    query?: string,
    paging?: Paging,
    results?: Result[],
    sort?: {},
    available_sorts?: [],
    filters?: Filters[],
    available_filters?: []
}

export interface Result {
    id?: string;
    title?: string;
    price?: number;
    prices?: Prices[];
    condition?: string;
    permalink?: string;
    thumbnail?: string;
    accepts_mercadopago?: boolean;
    installments?: Installments;
    address?: Address;
    shipping?: Shipping;
    attributes?: Attributes[];
    original_price?: number,
    category_id?: string,
    official_store_id?: string | number | null | undefined,
    domain_id?: string,
    catalog_product_id?: any,
    order_backend?: number,
    use_thumbnail_id?: boolean,
    offer_score?: string | number | object | null | undefined,
    offer_share?: string | number | object | null | undefined,
    match_score?: string | number | object | null | undefined,
    winner_item_id?: string | number | object | null | undefined,
    melicoin?: string | number | object | null | undefined,
    discounts?: string | number | object | null | undefined
}

export interface Filters {
    id?: string;
    name?: string;
    type?: string;
    values?: Values;
}

export interface Values {
    id?: string;
    name?: string;
    path_from_root: [];
}

export interface Prices {
    id?: string,
    type?: string,
    amount?: number,
    regular_amount?: string | number | null | undefined,
    currency_id?: string,
    last_updated?: string,
    conditions?: {},
    exchange_rate_context?: string,
    metadata?: {}
}

export interface Installments {
    quantity?: number,
    amount?: number,
    rate?: number,
    currency_id?: string,
}

export interface Address {
    state_id?: string,
    state_name?: string,
    city_id?: string,
    city_name?: string,
}

export interface Shipping {
    free_shipping?: boolean,
}

export interface Attributes {
    value_id?: string | number | null | undefined,
    value_name?: string,
    source?: number,
    id?: string,
    name?: string,
    value_struct?: string | number | null | undefined,
    attribute_group_id: string | number | null | undefined,
    attribute_group_name: string,
}

export interface Paging {
    total?: number,
    primary_results?: number,
    offset?: number,
    limit?: number,
}