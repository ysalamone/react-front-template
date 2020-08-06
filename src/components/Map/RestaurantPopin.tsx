import React from 'react';
import { TRestaurant } from '../../types/Restaurant';
import Stars from './Stars';
import Comment from './Comment';

import { StyledRestaurantContainer, StyledImg, StyledTitle, StyledDescription, StyledContent } from '../../styles/restaurantPopin.style';

interface IProps {
    restaurant: TRestaurant
}


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
