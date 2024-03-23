import React from 'react'
import * as S from './main.style'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteCard, switchLike } from '../../store/slices/cards'
import { CardsState } from '../../store/slices/cards'

export const Main: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cards = useSelector(
        (state: { cards: CardsState }) => state.cards.cards,
    )

    const handleDeleteCard = (index: number) => {
        dispatch(deleteCard(index))
    }

    const handleSwitchLike = (id: number) => {
        dispatch(switchLike(id))
    }

    const cardsHtml = cards.map((card, index) => (
        <S.Card
            key={card.id}
            onClick={() => {
                navigate(`/product/${index}`)
            }}
        >
            <S.CardLike
                src={card.statusLike ? '/like.png' : '/dislike.png'}
                onClick={(e) => {
                    e.stopPropagation()
                    handleSwitchLike(card.id)
                }}
            ></S.CardLike>
            <S.CardDelete
                src="/delete.png"
                onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteCard(index)
                }}
            ></S.CardDelete>
            <S.CardName>{card.title}</S.CardName>
            <S.CardImage src={card.image}></S.CardImage>
            <S.CardPrice>{card.price}$</S.CardPrice>
            <S.CardDescription>{card.description}$</S.CardDescription>
        </S.Card>
    ))

    return (
        <S.PageContainer>
            <S.Tittle>Магазин</S.Tittle>
            <S.BoxCard>{cardsHtml}</S.BoxCard>
        </S.PageContainer>
    )
}
