import React from 'react';
import { TCity } from '../../types/City';
import { StyledCity } from '../../styles/city.style';

interface IProps {
    city: TCity;
    onSelect: (id: string) => void;
}


const City = ({ city, onSelect }: IProps): JSX.Element => {
    const { name } = city;

    return (
        <StyledCity onClick={(): void => {
            onSelect(city._id);
        }}>
            {name}
        </StyledCity>
    );
};

export default City;