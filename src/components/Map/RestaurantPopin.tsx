import React from 'react';
import styled from 'styled-components';
import { TRestaurant } from '../../types/Restaurant';
import Stars from './Stars';
import Comment from './Comment';

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
    max-height: 300px;
    overflow: auto;
`;

const StyledContent = styled.div`
    padding: 0 25px 25px 25px;
`;

const StyledTitle = styled.span`
    font-weight: bold;
    font-size: 1rem;
    margin-right: 10px;
`;

const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
`;

const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;

const RestaurantPopin = ({ restaurant }: IProps): JSX.Element => {
    const { name, img, averageRating, description, comments } = restaurant;

    return (<StyledRestaurantContainer>
        {img && <StyledImg src={img} />}
        <StyledContent>
            <StyledTitle>
                {averageRating && <Stars rating={averageRating} />}
                {name}
            </StyledTitle>
            <StyledDescription>
                {description}
            </StyledDescription>
            {comments && comments.map(comment => (
                <div key={`${comment.author}-${name}`}>
                    <Comment comment={comment} />
                </div>
            ))}
        </StyledContent>
    </StyledRestaurantContainer>);
};

export default RestaurantPopin;
