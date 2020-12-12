import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { IPub, IBarathon } from '../types/api';
import BarathonForm from './BarathonForm';
import BarathonThumbnail from './BarathonThumbnail';
import Section from './Section';

const SContainer = styled.div`
    background-color: ${colors.darkGrey};
    padding: 15px;
`;

const App = (): JSX.Element => {
    // Déclaration d'une nouvelle variable d'état interne : pubs
    // RAPPEL: un changement d'état du composant provoque
    //         son re-rendu
    const [pubs, setPubs] = useState<IPub[]>([]);
    const [barathons, setBarathons] = useState<IBarathon[]>([]);

    // fonction executée au montage du composant
    // dans le DOM
    useEffect(() => {
        // obligé d'utiliser une fonction passe-plat pour le code asynchrone
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/pubs');
            const pubs = await response.json();
            setPubs(pubs);
        };

        const fetchBarathons = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/barathons');
            const barathons = await response.json();
            setBarathons(barathons);
        };

        fetchPubs();
        fetchBarathons();
    }, []);

    const pubsDuBarathon = (barathon: IBarathon): IPub[] => {
        const lesPubs = [];
        // parcours du tableau checkpoint
        barathon.checkpoints.map((unId: string) => {
            const unPub = pubs.find((pub: IPub) => {
                return unId === pub._id; // renvoie null si le checkpoint est mal renseigné
            });
            // on ajoute uniquement les checkpoints correctement renseignés
            if(unPub)
                lesPubs.push(unPub);
        });
        if(lesPubs.length === 0)
            return null;
        return lesPubs;
    };

    return (
        <SContainer>
            <Section>
                <BarathonForm pubs={pubs} />
            </Section>
            <div>
                <h1>Barathons créés par la communauté</h1>
                {barathons.map((barathon: IBarathon) => {
                    const lesPubs = pubsDuBarathon(barathon);
                    // const pubsNames = lesPubs ? lesPubs.map((pub: IPub) => pub.name) : null;
                    // seuls les barathons avec au moins 1 étape sont retournés
                    return lesPubs && <BarathonThumbnail key={barathon._id} barathon={barathon} pubs={lesPubs} />;
                })}
            </div>
        </SContainer>
    );
};

export default App;