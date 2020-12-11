import React from 'react';
import chroma from 'chroma-js';
import styled from 'styled-components';
import Button from "./Button";
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { IPub } from '../types/api';

interface IProps {
    pub: IPub;
    addPub: (id: string) => void;
    removePub: (id: string) => void;
}

const PubThumbnail = ({ pub, addPub, removePub }: IProps): JSX.Element => {
    const { _id, name, img, description } = pub;
    return (
        <>
            <SThumbnail>
                <SImg src={img} />
                <SContent>
                    <STitle>{name}</STitle>
                    <SDescription>{description === description.slice(0,80) ? description.slice(0,80) : description.slice(0,80) + '...'}</SDescription>
                </SContent>
            </SThumbnail>
            <SFlex>
                <Button type="button" onClick={(): void => { addPub(_id); }}>Ajouter</Button>
                <Button type="button" onClick={(): void => { removePub(_id); }}>Retirer</Button>
            </SFlex>
        </>
    );
};

const SDescription = styled.span`
    font-size: 1rem;
    color: ${colors.white};
`;

const SContent = styled.div`
    width: 200px;
    padding: 10px 15px;
    box-sizing: border-box;
`;

const STitle = styled.span`
    display: block;
    width: 100%;
    color: ${colors.white};
    font-family: ${fonts.title};
    font-size: 1.25rem;
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
`;

const SImg = styled.div<any>`
    width: 100px;
    height: 100px;
    background-image: url('${(props: any): string => props.src}');
    background-size: cover;
    background-position: center center;
`;

const SThumbnail = styled.a`
    display: flex;
    align-items: center;
    border-radius: 4px;
    overflow: auto;
    background: ${chroma(colors.veryDarkGrey).alpha(0.5).css()};
`;

const SFlex = styled.div`
    display: flex;
`;

export default PubThumbnail;