export interface ICartState {
    id: number,
    name: string,
    price: number,
    image: string,
    tva: number,
    totaux: number,
    count: number
}

export const INITIAL_STATE: ICartState [] = [];
