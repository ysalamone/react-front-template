import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { IBarathon, IPub } from '../types/api';
import LeafletMap from "./LeafletMap";

interface IProps {
    barathon: IBarathon;
    pubs: IPub[];
}

const BarathonThumbnail = ({ barathon, pubs }: IProps): JSX.Element => {

    const { name, author, checkpoints } = barathon;
    const pubsNames = pubs.map((pub: IPub) => pub.name);

    return (
        <SThumbnail>
            <div>
                <SName>{ name }</SName>
                <div>Créé par <SAuthor>{ author }</SAuthor></div>
                <SParcours>{ pubsNames.join(' → ') }</SParcours>
            </div>
            <LeafletMap pubs={pubs} selectedPubs={pubs} w={300} h={200} />
        </SThumbnail>
    );
};

const SThumbnail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 1.33rem;
    border-radius: 4px;
    overflow: auto;
    background: ${chroma(colors.veryDarkGrey).alpha(0.5).css()};
`;

const SName = styled.span`
    display: block;
    font-family: ${fonts.title};
    font-size: 1.5rem;
`;

const SAuthor = styled.span`
    font-family: ${fonts.title};
`;

const SParcours = styled.div`
    margin-top: 1rem;
    padding: 10px;
    color: ${colors.darkGrey};
    background: ${colors.white};
`;

export default BarathonThumbnail;