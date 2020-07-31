export type TRestaurant = {
    name: string,
    averageRating?: number,
    img?: string,
    latlng?: {
        lat: number,
        lng: number
    },
    comments: Comment[]
};

export type Comment = {
    text: string,
    author: string,
    rating: number
};
