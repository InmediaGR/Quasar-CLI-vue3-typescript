export interface ExampleStateInterface {
    prop: boolean;
    posts: Pokedex,
    post: Item
}
////////////////////////////////////////////
export interface TypePosts {
    posts: Pokedex;
}

export interface Pokedex {
    collection: Collection;
}

export interface Collection {
    metadata: Metadata;
    version:  string;
    href:     string;
    links:    CollectionLink[];
    items:    Item[];
}

export interface Item {
    data:   Datum[];
    href:   string;
    links?: ItemLink[];
}

export interface Datum {
    location?:          string;
    photographer?:      string;
    nasa_id:            string;
    title:              string;
    date_created:       Date;
    description:        string;
    media_type:         string;
    center:             string;
    keywords:           string[];
    album?:             string[];
    description_508?:   string;
    secondary_creator?: string;
}

export interface ItemLink {
    render?: string;
    href:    string;
    rel:     string;
}

export interface CollectionLink {
    rel:    string;
    prompt: string;
    href:   string;
}

export interface Metadata {
    total_hits: number;
}
