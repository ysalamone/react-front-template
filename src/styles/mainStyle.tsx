import styled, { createGlobalStyle } from 'styled-components';
import chroma from 'chroma-js';
import { fonts } from "./fonts";
import { colors } from "./colors";

// styles globaux
export const GlobalStyles = createGlobalStyle`
    body {
        background: #fefefe;
        margin: 0;
        font-size: 16px;
        font-family: ${fonts.text};
        color: ${colors.white};
    }

    .leaflet-popup-content-wrapper {
        background: transparent;
        border-radius: 0;
        box-shadow: none;
        padding: 0;
    }

    .leaflet-popup-content {
        margin: 0;
    }
`;

// container
export const SContainer = styled.div`
    background-color: ${colors.darkGrey};
    padding: 15px;
`;

// formulaire
export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// vignette de barathon
export const SBarathonThumbnail = styled.div`
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

export const SBarathonName = styled.span`
    display: block;
    font-family: ${fonts.title};
    font-size: 1.5rem;
`;

export const SBarathonAuthor = styled.span`
    font-family: ${fonts.title};
`;

export const SBarathonParcours = styled.div`
    margin-top: 1rem;
    padding: 10px;
    color: ${colors.darkGrey};
    background: ${colors.white};
`;

// bouton
export const SButton = styled.button`
    margin-bottom: 1.33rem;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background-color: ${colors.vibrant};
    color: ${colors.white};
    cursor: pointer;
    filter: drop-shadow(0 2px 4px ${chroma(colors.darkGrey).alpha(0.5).css()});
    font-family: ${fonts.text};
    font-size: 1.25rem;
    flex-grow: 1;
`;

// input
export const SInput = styled.input<any>`
    padding: 10px;
    margin-bottom: 1.33rem;
    border: 1px solid ${colors.lightGrey};
    border-radius: 5px;
    background-color: ${colors.white};
    filter: drop-shadow(0 2px 5px ${chroma(colors.lightGrey).alpha(0.5).css()});
    font-family: ${fonts.text};
    font-size: 1.25rem;
    text-align: center;
`;

// container de carte leaflet
export const SMapContainer = styled.div`
        margin-bottom: 1.33rem;
`;

// vignette de pub (popups carte)
export const SPubThumbnail = styled.a`
    display: flex;
    align-items: center;
    border-radius: 4px;
    overflow: auto;
    background: ${chroma(colors.veryDarkGrey).alpha(0.5).css()};
`;

export const SPubImg = styled.div<any>`
    width: 100px;
    height: 100px;
    background-image: url('${(props: any): string => props.src}');
    background-size: cover;
    background-position: center center;
`;

export const SPubContent = styled.div`
    width: 200px;
    padding: 10px 15px;
    box-sizing: border-box;
`;

export const SPubTitle = styled.span`
    display: block;
    width: 100%;
    color: ${colors.white};
    font-family: ${fonts.title};
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
`;

export const SPubDescription = styled.span`
    font-size: 1rem;
    color: ${colors.white};
`;

export const SPubFlexButtons = styled.div`
    display: flex;
`;

// section à fond gris
export const SSection = styled.div`
    border-radius: 4px;
    max-width: 800px;
    padding: 15px;
    background-color: ${colors.grey};
    margin: 30px auto;
`;