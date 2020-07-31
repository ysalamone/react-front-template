import React from 'react';
import { TComment } from '../../types/Restaurant';
import styled from 'styled-components';

interface IProps {
    comment: TComment
}

const StyledContainer = styled.div`
    padding: 10px;
    background: #dfdfdf;
    margin-bottom: 5px;
`;


const StyledHeader = styled.div`
    display: flex;
    margin-bottom: 5px;

    .author {
        font-weight: bold;
        margin-right: 5px;
    }
    .date {
        font-weight: 100;
    }

    .rating {
        margin-left: auto;
    }
`;

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