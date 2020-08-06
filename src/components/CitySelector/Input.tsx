import React from 'react';
import { StyledInput } from '../../styles/input.style';

interface IProps {
    onChange: (e: any) => void;
    value: string;
    withSuggestion: boolean;
}

const Input = ({ onChange, value, withSuggestion }: IProps): JSX.Element => {
    return (
        <StyledInput
            onChange={onChange}
            type='text'
            value={value}
            placeholder='Rechercher une ville'
            withSuggestion={withSuggestion}
        />
    );
};

export default Input;
