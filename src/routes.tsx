import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Main } from './page/main/main'
import { Product } from './page/product/product'
import { useEffect } from 'react'
import { getData } from './api'
import { useDispatch } from 'react-redux'
import { setCards } from './store/slices/cards'

export const AppRoutes = () => {
    const dispatch = useDispatch()

    const handleGetData = async () => {
        const result = await getData()
        const data = result.map((card) => {
            return { ...card, statusLike: false }
        })
        dispatch(setCards(data))
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
}
