import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';

interface IProps {
    type: "button" | "submit" | "reset";
    children: string;
    onClick?: () => void;
}

const Button = ({ type, children, onClick }: IProps): JSX.Element => {
    return (
        <SButton type={type} onClick={onClick}>{children}</SButton>
    );
};

const SButton = styled.button`
    margin-bottom: 1.33rem;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background-color: ${colors.vibrant};
    color: ${colors.white};
    cursor: pointer;
    filter: drop-shadow(0 2px 4px ${chroma(colors.darkGrey).alpha(0.5).css()});
    font-size: 1.25rem;
    flex-grow: 1;
`;

export default Button;