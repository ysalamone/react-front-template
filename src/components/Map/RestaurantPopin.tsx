import React from 'react';
import { TRestaurant } from '../../types/Restaurant';
import styled from 'styled-components';
import Stars from './Stars';

interface IProps {
    restaurant: TRestaurant
}

const StyledRestaurantContainer = styled.div`
    display: block;
    width: 100%;
    min-width: 250px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
`;

const StyledContent = styled.div`
    padding: 0 25px 25px 25px;
`;

const StyledTitle = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const RestaurantPopin = ({ restaurant }: IProps): JSX.Element => {
    const { name, img, averageRating } = restaurant;

    return (<StyledRestaurantContainer>
        {img && <StyledImg src={img} />}
        <StyledContent>
            <StyledTitle>
                {averageRating && <Stars rating={averageRating} />}
                {name}
            </StyledTitle>
        </StyledContent>
    </StyledRestaurantContainer>);
};

export default RestaurantPopin;
