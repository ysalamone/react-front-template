import styled from 'styled-components';
import { colors } from './colors.style';
import { fonts } from './fonts.style';

export const StyledCity = styled.button`
padding: 15px 25px;
border: none;
color: ${colors.white};
font-family: ${fonts.text};
background: none;
cursor: pointer;
display: block;
width: 100%;
font-size: 14px;

&:hover {
    background: #eee;
}
`;