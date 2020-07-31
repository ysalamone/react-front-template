import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

interface IProps {
    position: number[]
}

const LeafletMap = ({ position }: IProps): JSX.Element => (
    <Map center={position} zoom={13}>
        <TileLayer
            url={TILE_LAYER}
            attribution={ATTRIBUTION}
        />
        <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
    </Map>
);


export default LeafletMap;