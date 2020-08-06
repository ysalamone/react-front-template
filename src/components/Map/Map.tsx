import React, { useState, useEffect } from 'react';
import { TCity } from '../../types/City';
import LeafletMap from './LeafletMap';
import styled from 'styled-components';
import simulatedRestaurants from '../../../restaurants';

interface IProps {
    city?: TCity
}


const StyledMapContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    position: relative;
    z-index: 0;
    
    .leaflet-container {
        height: 100%;
    }
`;

const defaultPosition = [48.85341, 2.3488];
const Map = ({ city }: IProps): JSX.Element => {
    const position = city ? [parseFloat(city.latlng.lat), parseFloat(city.latlng.lng)] : defaultPosition;
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