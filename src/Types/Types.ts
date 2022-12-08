export interface adType {
    id: number,
    title: string,
    price: number,
    priceNegotiable?: number,
    description: string,
    dateCreated: string,
    views: number,
    images: string[],
    category?: string,
    userInfo: { name: string, email: string },
    state: string
}