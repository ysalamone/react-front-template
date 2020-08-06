import styled from 'styled-components';
import { fonts } from './fonts.style';
import { colors } from './colors.style';

export const StyledContainer = styled.div`
    padding: 10px;
    background: ${colors.lightGrey};
    margin-bottom: 5px;
`;


export const StyledHeader = styled.div`
    display: flex;
    margin-bottom: 5px;

    .author {
        font-family: ${fonts.title};
        margin-right: 5px;
    }

    .date {
        font-weight: 100;
    }

    .rating {
        margin-left: auto;
    }
`;