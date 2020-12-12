import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { GlobalStyles } from './styles/mainStyle';

class EntryPoint extends React.Component {
    render (): JSX.Element {
        return (
            <>
                <GlobalStyles />
                <App />
            </>
        );
    }
}

ReactDOM.render(<EntryPoint />, document.getElementById('app'));
