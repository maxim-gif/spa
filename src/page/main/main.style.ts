import styled from 'styled-components'

export const Tittle = styled.h1`
    color: black;
    font-size: 70px;
    text-align: center;
    padding: 20px 0 50px 0;
`

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('/12.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

export const BoxCard = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 250px);
    justify-content: center;
    gap: 30px;
`

export const Card = styled.div`
    position: relative;
    height: 380px;
    border-radius: 20px;
    padding: 15px 35px 0 35px;
    overflow: hidden;
    background-color: white;
    transition: all 0.3s;
    &:hover {
        box-shadow: 10px 5px 5px grey;
        transform: translate(-10px, -5px);
    }
`

export const CardDelete = styled.img`
    position: absolute;
    top: 290px;
    right: 35px;
    width: 18px;
    height: 18px;
`

export const CardLike = styled(CardDelete)`
    right: 65px;
`

export const CardImage = styled.img`
    width: 180px;
    height: 200px;
    margin: 20px 0px;
`

export const CardName = styled.h2`
    height: 30px;
    overflow: hidden;
    color: black;
    font-size: 15px;
`

export const CardPrice = styled.h3`
    height: 20px;
    color: black;
    font-size: 20px;
    margin-bottom: 20px;
`

export const CardDescription = styled.p`
    height: 35px;
    color: black;
    font-size: 15px;
    overflow: hidden;
`
