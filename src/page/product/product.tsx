import React from 'react'
import * as S from './product.style'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CardsState } from '../../store/slices/cards'

export const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const dataProduct = useSelector(
        (state: { cards: CardsState }) => state.cards.cards[Number(id)],
    )

    return (
        <S.PageContainer>
            <S.Tittle>{dataProduct.title}</S.Tittle>
            <S.Product>
                <S.ProductImage src={dataProduct.image}></S.ProductImage>
                <S.ProductInfo>
                    <S.ProductCategory>
                        {dataProduct.category}
                    </S.ProductCategory>
                    <S.ProductDescription>
                        {dataProduct.description}
                    </S.ProductDescription>
                    <S.ProductPrice>{dataProduct.price}$</S.ProductPrice>
                    <S.ProductRating>
                        Rating: {dataProduct.rating.rate}
                    </S.ProductRating>
                    <S.ProductCount>
                        Count: {dataProduct.rating.count}
                    </S.ProductCount>
                    <S.ProductButton onClick={() => navigate(`/`)}>
                        Назад
                    </S.ProductButton>
                </S.ProductInfo>
            </S.Product>
        </S.PageContainer>
    )
}
