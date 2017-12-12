
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom'


class InitLayout extends React.Component {

    render() {
        return (
            <div className="entry-box">
                sdfasf
            </div>
        )
    }
}

const App = () =>
    <BrowserRouter>
        <InitLayout />
    </BrowserRouter>;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

