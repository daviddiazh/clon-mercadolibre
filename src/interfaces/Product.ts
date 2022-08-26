export interface IProduct {
    site_id?: "MLC",
    country_default_time_zone?: "GMT-04:00",
    query?: string,
    paging?: {},
    results?: Result[],
    sort?: {},
    available_sorts?: [],
    filters?: [],
    available_filters?: []
}

export interface Result {
    id?: string;
    title?: string;
}