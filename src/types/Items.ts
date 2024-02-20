export interface IItems extends IListItem{
    id: number,
    price: number,
    category: string,
    image: string,
    rate: number,
    count: number,
}

export interface IListItem {
    title: string,
    description: string,
}