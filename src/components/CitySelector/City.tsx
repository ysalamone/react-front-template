import React from 'react';
import styled from 'styled-components'
import { TCity } from '../../types/City';

interface IProps {
    city: TCity;
    onSelect: (id: string) => void;
}

const StyledCity = styled.button`
    padding: 15px 25px;
    border: none;
    background: none;
    cursor: pointer;
    display: block;
    width: 100%;
    font-size: 18px;

    &:hover {
        background: #eee;
    }
`

const City = ({ city, onSelect }: IProps): JSX.Element => {
    const { name } = city;

    return (
        <StyledCity onClick={() => {
            onSelect(city._id)
        }}>
            {name}
        </StyledCity>
    );
}

export default City;