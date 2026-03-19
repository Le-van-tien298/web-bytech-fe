export interface IProduct {
    id: number;
    name: string;
    slug: string;
    price: number;
    discountPercent: number;
    thumbnail: string;
    shortDescription: string;
    isFeatured: number;
}