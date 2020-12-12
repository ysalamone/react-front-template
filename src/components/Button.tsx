import React from 'react';
import { SButton } from '../styles/mainStyle';



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

export default Button;