import React from 'react';
import { Layout, Button,Tabs } from 'antd'
import 'antd/dist/antd.css'
import useMedia from "react-media-hook2";
import MainSider from "./MainSider";
import MainHeader from './MainHeader';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes'


const { Content, Footer } = Layout;
const { TabPane } = Tabs

function Main(props) {
    const [collapse, setCollapse] = React.useState(true);

    const isMobile = useMedia({
        onChange: val => {
            setCollapse(true);
        },
        query: "(max-width: 599px)"
    })[0];

    return (
        <>
            <Layout style={{ height: "100vh" }}>
                <MainSider collapse={collapse} onCollapse={val => setCollapse(val)} isMobile={isMobile} />
                <Layout>
                    <MainHeader collapsed={collapse} onCollapse={() => setCollapse(!collapse)}/>
                    <Content>
                    
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={childProps => (
                                            <route.component {...childProps} />
                                        )} />
                                ) : (null)
                            })}
                        </Switch>
                    
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </>
    );
}

export default Main;