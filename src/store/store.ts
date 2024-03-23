import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './slices/cards'

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
})
