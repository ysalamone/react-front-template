import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';
import App from './components/App';
import { colors } from './styles/colors';
import { fonts } from './styles/fonts';

const GlobalStyles = createGlobalStyle`
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

class EntryPoint extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <GlobalStyles />
                <App />
            </>
        );
    }
}

ReactDOM.render(<EntryPoint />, document.getElementById('app'));
