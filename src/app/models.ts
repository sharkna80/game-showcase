export type Game = {
    id: string;
    name: string;
    description: string;
    description_raw: string;
    background_image_additional: string;
    released: string;
    background_image: string;
    metacritic: number;
    metacritic_url: string;
    genres: Genre[];
    website: string;
    parent_platforms: ParentPlatform[];
    publishers: Publisher[];
    ratings: Rating[];
    screenshots_count: number;
    movies_count: number;
}

export interface ApiResponse<T>  {
    results: T[];
}

export type ParentPlatform = {
    platform: {
        name: string;
        slug: string;
    }
}

export type Genre = {
    name: string;
}

export type Publisher = {
    name: string;
}

export type Rating = {
    id :string;
    count: number;
    title: string;
}

export type Screenshot = {
    image :string;
}

export type Trailer = {
    id: string;
    name: string;
    data?: {
        max?: string;
    }
}
