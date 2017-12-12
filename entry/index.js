
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

/*按需加载*/

import Bundle from '../component/Bundle'
import {renderRouters} from '../routes'

class InitLayout extends React.Component {

    render() {
        return (
            <div className="entry-box">
                <Switch>
                {
                    renderRouters().map((route, i) => {
                        return <Route key={i} exact path={route.path} render={(props)=>{

                            return <Bundle load={route.component}>
                                {(Comm) => <Comm {...props}/>}
                            </Bundle>
                        }}/>
                    })
                }
                </Switch>
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

