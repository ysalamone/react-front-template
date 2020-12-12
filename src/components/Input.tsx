import React from 'react';
import { SInput } from '../styles/mainStyle';

interface IProps {
    name: string,
    type: string,
    placeholder?: string,
    value?: string,
    readonly?: boolean
}

const Input = ({ name, type, placeholder, value, readonly }: IProps): JSX.Element => {

    return (
        <>
            <SInput name={name} type={type} placeholder={placeholder} value={value} readOnly={readonly}/>
        </>
    );
};

export default Input;