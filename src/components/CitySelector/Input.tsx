import React from 'react';
import styled from 'styled-components';

interface IProps {
    onChange: (e: any) => void;
}

const StyledInput = styled.input`
    padding: 10px 25px;
    border: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border-radius: 5px;
    height: 50px;
    width: 100%;
`;

const Input = ({ onChange }: IProps): JSX.Element => {
    return (
        <StyledInput onChange={onChange} type='text' />
    );
};

export default Input;
