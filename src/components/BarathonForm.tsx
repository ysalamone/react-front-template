import React, { useState } from 'react';
import styled from 'styled-components';
import Input from "./Input";
import Button from './Button';
import LeafletMap from './LeafletMap';
import { IPub } from '../types/api';

interface IProps {
    pubs: IPub[];
}

const BarathonForm = ({ pubs }: IProps): JSX.Element => {
    const [selectedPubs, setSelectedPubs] = useState<IPub[]>([]);

    const handleSubmit = async (e: any): Promise<void> => {
        // evite le rechargement de la page au submit
        e.preventDefault();
        const checkpoints = e.target.elements.namedItem('pubs').value.split(',');

        const values = {
            name: e.target.elements.namedItem('name').value,
            author: e.target.elements.namedItem('author').value,
            checkpoints
        };

        const response = await fetch('https://miw-server.herokuapp.com/barathons', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const responseJSON = await response.json();
        console.log(responseJSON);
    };

    const addPub = (id: string): void => {
        const selectedPub = pubs.find((pub: IPub) => {
            return pub._id === id;
        });
        setSelectedPubs([...selectedPubs, selectedPub] as IPub[]);
    };

    const removeLastPub = (): void => {
        const pubs = [...selectedPubs];
        pubs.pop();
        setSelectedPubs(pubs);
    };

    const removePub = (id: string): void => {
        setSelectedPubs(selectedPubs.filter((pub: IPub) => {
            return pub._id !== id;
        }));
    };

    return (
        <SForm onSubmit={handleSubmit}>
            <h1>Créer un barathon 🍻</h1>
            <Input name="name" type="text" label="Nom du barathon"/>
            <Input name="author" type="text" label="Auteur"/>
            <Input name="pubs" type="text" label="Pubs" value={selectedPubs.map((pub: IPub) => pub._id).join(',')} readonly={true} />
            <Button type="button" onClick={removeLastPub}>Remove last</Button>
            <LeafletMap pubs={pubs} selectedPubs={selectedPubs} w={600} h={400} addPub={addPub} removePub={removePub} />
            <Button type="submit">Soumettre</Button>
        </SForm>
    );
};

const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default BarathonForm;