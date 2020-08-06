import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { TRestaurant } from '../../types/Restaurant';
import RestaurantPopin from './RestaurantPopin';

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

interface IProps {
    position: number[],
    restaurants: TRestaurant[]
}

const LeafletMap = ({ position, restaurants }: IProps): JSX.Element => (
    <Map center={position} zoom={13} zoomControl={false}>
        <TileLayer
            url={TILE_LAYER}
            attribution={ATTRIBUTION}
            subDomain='abcd'
        />

        {restaurants.map((restaurant: TRestaurant) =>
            <Marker key={restaurant.name} position={[restaurant.latlng.lat, restaurant.latlng.lng]}>
                <Popup>
                    <RestaurantPopin restaurant={restaurant} />
                </Popup>
            </Marker>
        )}
    </Map >
);


export default LeafletMap;