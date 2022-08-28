export interface IProduct {
    site_id?: "MLC",
    country_default_time_zone?: "GMT-04:00",
    query?: string,
    paging?: {},
    results?: Result[],
    sort?: {},
    available_sorts?: [],
    filters?: Filters[],
    available_filters?: []
}

export interface Result {
    id?: string;
    title?: string;
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