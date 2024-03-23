import { createSlice } from '@reduxjs/toolkit'
import { Card } from '../../page/main/main.style'

type Rating = {
    rate: number
    count: number
}

type Card = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: Rating
    statusLike: boolean
}

export type CardsState = {
    cards: Card[]
}

const initialState: CardsState = {
    cards: [],
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,

    reducers: {
        setCards: (state, action) => {
            state.cards = action.payload
        },
        deleteCard: (state, action) => {
            const index = action.payload
            state.cards.splice(index, 1)
        },
        switchLike: (state, action) => {
            const id = action.payload
            const card = state.cards.find((card) => card.id === id)
            if (card) {
                card.statusLike = !card.statusLike
            }
        },
    },
})

export const { setCards, deleteCard, switchLike } = cardsSlice.actions

export default cardsSlice.reducer
