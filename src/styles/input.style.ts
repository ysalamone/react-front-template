import styled from 'styled-components';
import { colors } from './colors.style';

export const STYLED_INPUT_HEIGHT = 50;
export const INPUT_TOP_POSITION = 25;
export const INPUT_TRANSITION_DURATION = 0.08;
export const PANEL_TRANSITION_DURATION = 0.2;
export const INPUT_WIDTH = 250;

type TStyledInput = {
    withSuggestion: boolean;
};

const borderRadiusFocused = `${STYLED_INPUT_HEIGHT / 2}px ${STYLED_INPUT_HEIGHT / 2}px 0 0;`;
const borderRadius = `${STYLED_INPUT_HEIGHT / 2}px;`;

const transitionWhenFocused = `border-radius ${INPUT_TRANSITION_DURATION}s ease-in `;
const transition = `border-radius ${INPUT_TRANSITION_DURATION}s ease-out ${PANEL_TRANSITION_DURATION}s`;

export const StyledInput = styled.input<TStyledInput>`
    padding: 10px 25px;
    border: none;
    border-radius: ${(props): string => props.withSuggestion ? borderRadiusFocused : borderRadius};
    height: ${STYLED_INPUT_HEIGHT}px;
    width: ${INPUT_WIDTH}px;
    margin: ${INPUT_TOP_POSITION}px auto 0 auto;
    background: ${colors.grey};
    display: block;
    color: white;
    outline: none;
    transition: ${(props): string => props.withSuggestion ? transitionWhenFocused : transition};

    &::placeholder {
        color: white;
        opacity: 0.6;
    }
`;