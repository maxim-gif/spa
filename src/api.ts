const baseUrl = 'https://fakestoreapi.com/products?limit=12'

type Rating = {
    rate: number
    count: number
}

export type Card = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
    statusLike: boolean
}

type ApiResponse = Card[]

export const getData = async (): Promise<ApiResponse> => {
    const response = await fetch(baseUrl)
    const data = await response.json()
    return data
}
