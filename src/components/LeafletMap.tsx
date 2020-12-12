import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { LatLngExpression } from "leaflet";
import { IPub } from '../types/api';
import { colors } from '../styles/colors';
import PubThumbnail from './PubThumbnail';
import { SMapContainer } from '../styles/mainStyle';

interface IProps {
    pubs: IPub[];
    selectedPubs: IPub[];
    w: number;
    h: number;
    addPub?: (id: string) => void;
    removePub?: (id: string) => void;
}

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const LeafletMap = ({ pubs, selectedPubs, w, h, addPub, removePub }: IProps): JSX.Element => {

    const polyline: LatLngExpression[] = selectedPubs.map((pub: IPub) => {
        return [pub.latlng.lat, pub.latlng.lng];
    });

    return (
        <SMapContainer>
            <MapContainer
                center={[44.5618, 6.0825]}
                zoom={14}
                style={{
                    width: w,
                    height: h
                }}
            >
                <TileLayer
                    attribution={ATTRIBUTION}
                    url={TILE_LAYER}
                />
                {pubs.map((pub: IPub) =>{
                    return (
                        <Marker
                            key={pub._id + Math.random() }
                            position={[pub.latlng.lat, pub.latlng.lng]}>
                            <Popup>
                                <PubThumbnail
                                    key={pub._id}
                                    pub={pub}
                                    addPub={addPub}
                                    removePub={removePub} />
                            </Popup>
                        </Marker>
                    );
                })}
                {polyline.length > 0 && <Polyline positions={polyline} pathOptions={{ color: colors.vibrant }}/>}
            </MapContainer>
        </SMapContainer>
    );
};

export default LeafletMap;