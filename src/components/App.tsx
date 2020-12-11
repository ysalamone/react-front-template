import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { IPub } from '../types/api';
import BarathonForm from './BarathonForm';
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

    // fonction executée au montage du composant
    // dans le DOM
    useEffect(() => {
        // obligé d'utiliser une fonction passe-plat pour le code asynchrone
        const fetchPubs = async (): Promise<void> => {
            const response = await fetch('https://miw-server.herokuapp.com/pubs');
            const pubs = await response.json();
            setPubs(pubs);
        };

        fetchPubs();
    }, []);

    return (
        <SContainer>
            <Section>
                <BarathonForm pubs={pubs} />
            </Section>
        </SContainer>
    );
};

export default App;