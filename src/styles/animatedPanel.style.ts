import styled from 'styled-components';
import { INPUT_WIDTH, INPUT_TRANSITION_DURATION, PANEL_TRANSITION_DURATION } from './input.style';
import { colors } from './colors.style';

export const PANEL_HEIGHT = 250;

export const StyledPanel = styled.div`
    border-radius: 0 0 5px 5px;
    background: ${colors.grey};
    height: 100%;
`;

type TStyledPanelContainer = {
    isOpened: boolean;
};

const transitionOpened = `max-height ${PANEL_TRANSITION_DURATION}s ease-out ${INPUT_TRANSITION_DURATION}s`;
const transition = `max-height ${PANEL_TRANSITION_DURATION}s ease-in`;

export const StyledPanelContainer = styled.div<TStyledPanelContainer>`
    max-height: ${(props: any): string => (props.isOpened ? '250px' : '0')};
    height: ${PANEL_HEIGHT}px;
    width: ${INPUT_WIDTH}px;
    transition: ${(props: any): string => (props.isOpened ? transitionOpened : transition)};
    margin: -3px auto 0;
`;