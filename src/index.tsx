import React from 'react';
import ReactDOM from 'react-dom';

class EntryPoint extends React.Component {
    render (): JSX.Element {
        return (
            <div>My react app</div>
        );
    }
}

ReactDOM.render(<EntryPoint />, document.getElementById('app'));
