import React from 'react';
import Button from './Button';
import { IPub } from '../types/api';
import { SPubThumbnail, SPubImg, SPubContent, SPubTitle, SPubDescription, SPubFlexButtons } from "../styles/mainStyle";

interface IProps {
    pub: IPub;
    addPub?: (id: string) => void;
    removePub?: (id: string) => void;
}

const PubThumbnail = ({ pub, addPub, removePub }: IProps): JSX.Element => {
    const { _id, name, img, description } = pub;
    return (
        <>
            <SPubThumbnail>
                <SPubImg src={img} />
                <SPubContent>
                    <SPubTitle>{name}</SPubTitle>
                    <SPubDescription>{description === description.slice(0,80) ? description.slice(0,80) : description.slice(0,80) + '...'}</SPubDescription>
                </SPubContent>
            </SPubThumbnail>
            { addPub && removePub &&
            <SPubFlexButtons>
                <Button type="button" onClick={(): void => { addPub(_id); }}>Ajouter</Button>
                <Button type="button" onClick={(): void => { removePub(_id); }}>Retirer</Button>
            </SPubFlexButtons> }
        </>
    );
};

export default PubThumbnail;