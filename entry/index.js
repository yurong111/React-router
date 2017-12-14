
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import { Menu, Icon } from 'antd';

/*按需加载*/

import Bundle from '../component/Bundle'
import {renderRouters} from '../routes'


class InitLayout extends React.Component {
    state = {
        current: 'Home',
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }


    render() {

        return (
            <div className="entry-box">

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="Home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="MINI">
                        <Link to="/mini">MINI</Link>
                    </Menu.Item>
                    <Menu.Item key="AboutUs">
                        <Link to="/aboutUs">AboutUs</Link>
                    </Menu.Item>
                </Menu>

                <Switch>
                {
                    renderRouters().map((route, i) => {
                        return <Route key={i} exact path={route.path} render={(props)=>{
                            console.log('props', props);
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

