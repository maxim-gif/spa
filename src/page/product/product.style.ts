import styled from 'styled-components'

export const Tittle = styled.h1`
    color: black;
    font-size: 50px;
    text-align: center;
    padding: 40px 0;
`

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/12.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

export const Product = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 100vw;
    height: 700px;
`

export const ProductImage = styled.img`
    width: 650px;
    height: 650px;
`

export const ProductInfo = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    width: 650px;
    height: 650px;
`

export const ProductCategory = styled.h2`
    color: black;
    font-size: 40px;
`

export const ProductDescription = styled.p`
    color: black;
    font-size: 20px;
`

export const ProductPrice = styled(ProductCategory)``

export const ProductRating = styled(ProductCategory)``

export const ProductCount = styled(ProductCategory)``

export const ProductButton = styled.button`
    position: absolute;
    bottom: 5px;
    width: 200px;
    height: 50px;
    background: #d3d3d3;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
        background: #a9a9a9;
    }
`
