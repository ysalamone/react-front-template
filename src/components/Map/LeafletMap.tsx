import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { TRestaurant } from '../../types/Restaurant';
import RestaurantPopin from './RestaurantPopin';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

interface IProps {
    position: number[],
    restaurants: TRestaurant[]
}

const LeafletMap = ({ position, restaurants }: IProps): JSX.Element => (
    <Map center={position} zoom={13}>
        <TileLayer
            url={TILE_LAYER}
            attribution={ATTRIBUTION}
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