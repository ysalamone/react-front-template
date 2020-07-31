export type TRestaurant = {
    name: string,
    averageRating?: number,
    img?: string,
    description?: string,
    latlng?: {
        lat: number,
        lng: number
    },
    comments: TComment[]
};

export type TComment = {
    text: string,
    date: string,
    author: string,
    rating: number
};
