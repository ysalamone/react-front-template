import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface IProps {
    name: string,
    type: string,
    label?: string,
    value?: string,
    readonly?: boolean
}

const Input = ({ name, type, label, value, readonly }: IProps): JSX.Element => {

    return (
        <>
            <SInput name={name} type={type} placeholder={label} value={value} readOnly={readonly}/>
        </>
    );
};

const SInput = styled.input<any>`
    padding: 10px;
    margin-bottom: 1.33rem;
    border: 1px solid ${colors.lightGrey};
    border-radius: 5px;
    background-color: ${colors.white};
    filter: drop-shadow(0 2px 5px ${chroma(colors.lightGrey).alpha(0.5).css()});
    font-family: ${fonts.text};
    font-size: 1.25rem;
    text-align: center;
`;

export default Input;