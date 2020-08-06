import styled from 'styled-components';
import { fonts } from './fonts.style';
import { colors } from './colors.style';

export const StyledRestaurantContainer = styled.div`
    display: block;
    width: 100%;
    min-width: 250px;
    background: ${colors.grey};
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
    max-height: 300px;
    overflow: auto;
`;

export const StyledContent = styled.div`
    padding: 0 25px 25px 25px;
`;

export const StyledTitle = styled.span`
    font-size: 20px;
    font-family: ${fonts.title};
    color: ${colors.white};
    margin-right: 10px;
`;

export const StyledDescription = styled.p`
    font-weight: 400;
    font-family: ${fonts.text};
    color: ${colors.white};
`;

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
`;