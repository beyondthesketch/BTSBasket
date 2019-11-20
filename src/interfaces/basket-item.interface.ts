export interface BasketItemInterface {
    id: number;
    name: string;
    price: number;
    currency?: string;
    url?: string;
    [propName: string]: any;
}