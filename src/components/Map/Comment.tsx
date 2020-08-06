import React from 'react';
import { TComment } from '../../types/Restaurant';
import { StyledContainer, StyledHeader } from '../../styles/comment.style';

interface IProps {
    comment: TComment
}

const Comment = ({ comment }: IProps): JSX.Element => (
    <StyledContainer>
        <StyledHeader>
            <span className='author'>{comment.author}</span>
            <span className='date'>{comment.date}</span>
            <span className='rating'>{comment.rating}/10</span>
        </StyledHeader>
        {comment.text}
    </StyledContainer>
);

export default Comment;