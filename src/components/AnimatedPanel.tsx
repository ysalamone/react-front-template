import React from 'react';
import { StyledPanel, StyledPanelContainer } from '../styles/animatedPanel.style';

interface IProps {
    isOpened: boolean;
    children: JSX.Element;
}

const SuggestionPanel = ({ isOpened, children }: IProps): JSX.Element => {
    return (
        <StyledPanelContainer isOpened={isOpened}>
            <StyledPanel>
                {children}
            </StyledPanel>
        </StyledPanelContainer>
    );
};

export default SuggestionPanel;