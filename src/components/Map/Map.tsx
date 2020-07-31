import React, { useState, useEffect } from 'react';
import { TCity } from '../../types/City';
import LeafletMap from './LeafletMap';
import styled from 'styled-components';
import simulatedRestaurants from '../../../restaurants';

interface IProps {
    city: TCity
}
const CONTAINER_HEIGHT = 400;

const StyledMapContainer = styled.div`
    width: 80%;
    height: ${CONTAINER_HEIGHT}px;
    margin: 35px auto 0 auto;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    .leaflet-container {
        height: ${CONTAINER_HEIGHT}px;
    }
`;

const Map = ({ city }: IProps): JSX.Element => {
    const position = [parseFloat(city.latlng.lat), parseFloat(city.latlng.lng)];
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // todo fetch restaurant de la ville selectionner
        setRestaurants(simulatedRestaurants);
    }, [city]);

    return (<StyledMapContainer>
        <LeafletMap position={position} restaurants={restaurants} />
    </StyledMapContainer>);
};

export default Map;