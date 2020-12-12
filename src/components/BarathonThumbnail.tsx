import React from 'react';
import { IBarathon, IPub } from '../types/api';
import LeafletMap from './LeafletMap';
import { SBarathonThumbnail, SBarathonContent, SBarathonName, SBarathonAuthor, SBarathonParcours } from '../styles/mainStyle';

interface IProps {
    barathon: IBarathon;
    pubs: IPub[];
}

const BarathonThumbnail = ({ barathon, pubs }: IProps): JSX.Element => {

    const { name, author } = barathon;
    const pubsNames = pubs.map((pub: IPub) => pub.name);

    return (
        <SBarathonThumbnail>
            <SBarathonContent>
                <SBarathonName>{ name }</SBarathonName>
                <div>Créé par <SBarathonAuthor>{ author }</SBarathonAuthor></div>
                <SBarathonParcours>{ pubsNames.join(' → ') }</SBarathonParcours>
            </SBarathonContent>
            <LeafletMap pubs={pubs} selectedPubs={pubs} w={300} h={200} />
        </SBarathonThumbnail>
    );
};

export default BarathonThumbnail;