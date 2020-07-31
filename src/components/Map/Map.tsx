import React, { useState, useEffect } from 'react';
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
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // todo fetch restaurant de la ville selectionner

        const simulatedRestaurants = [
            {
                name: "Le petit gourmet",
                img: "https://cdn.pixabay.com/photo/2010/12/13/10/05/background-2277_960_720.jpg",
                averageRating: 7.888,
                latlng: {
                    lat: 48.85349,
                    lng: 2.3486
                },
                comments: [
                    {
                        "text": "Un accueil chaleureux, pas de cheveux dans la soupe. Solide 8/10.",
                        "author": "Pierre", "date": "07/07/08", "rating": 8
                    },
                    {
                        "text": "Gourmet surement pas. Je n'ai jamais aussi mal mangé de ma vie. Je déconseille fortemment.", "author": "xXBillyTheKidXx",
                        "date": "02/08/20",
                        "rating": 1
                    }
                ]
            },
            {
                name: "Fast Kebab",
                img: "https://cdn.pixabay.com/photo/2017/10/18/11/58/doner-kebab-2863915_960_720.jpg",
                averageRating: 7.888,
                latlng: {
                    lat: 48.85339,
                    lng: 2.3485
                },
                comments: [
                    {
                        "text": "Mamamia quel délice. Je vous conseille la sauce piment / huile de moteur, elle vous laissera un souvenir inoubliable.",
                        "author": "Anonymous", "date": "07/12/2020", "rating": 10
                    },
                    {
                        "text": "Meilleur kebab de Paris",
                        "date": "02/05/20",
                        "rating": 9
                    },
                    {
                        "text": "5€ le menu étudiant, avec cannette 33cl et indigestion, j'adore",
                        "date": "17/11/20",
                        "rating": 8
                    }
                ]
            }
        ];

        setRestaurants(simulatedRestaurants);
    }, [city]);

    return (<StyledMapContainer>
        <LeafletMap position={position} restaurants={restaurants} />
    </StyledMapContainer>);
};

export default Map;