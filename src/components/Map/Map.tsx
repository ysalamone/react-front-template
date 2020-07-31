import React from 'react';
import { TCity } from '../../types/City';
import LeafletMap from './LeafletMap';
import styled from 'styled-components';

interface IProps {
    city: TCity
}
const CONTAINER_HEIGHT = 400;

const StyledMapContainer = styled.div`
    width: 80%;
    height: ${CONTAINER_HEIGHT}px;
    margin: 35px auto 0 auto;

    .leaflet-container {
        height: ${CONTAINER_HEIGHT}px;
    }
`;

const Map = ({ city }: IProps): JSX.Element => {
    const position = [parseFloat(city.latlng.lat), parseFloat(city.latlng.lng)];

    return (<StyledMapContainer>
        <LeafletMap position={position} />
    </StyledMapContainer>);
};

export default Map;