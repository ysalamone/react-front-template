import React from 'react';
import styled from 'styled-components'
import { } from 'styled-components/cssprop'

interface IProps {
    isOpened: boolean;
    children: JSX.Element;
}

const StyledPanel = styled.div`
    border-radius: 0 0 5px 5px;
    background: #fff;
    height: 100%;
    padding-top: 15px;
`

type TStyledPanelContainer = {
    isOpened: boolean;
}

const StyledPanelContainer = styled.div<TStyledPanelContainer>`
    max-height: ${props => (props.isOpened ? '250px' : '0')};
    transition: max-height 0.2s ease;
    height: 250px;
    overflow: hidden;
`

const SuggestionPanel = ({ isOpened, children }: IProps) => {
    return (
        <StyledPanelContainer isOpened={isOpened}>
            <StyledPanel>
                {children}
            </StyledPanel>
        </StyledPanelContainer>
    );
}

export default SuggestionPanel;