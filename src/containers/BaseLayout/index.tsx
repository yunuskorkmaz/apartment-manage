import React from 'react';
import useMedia from 'react-media-hook2'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import MainHeader from './MainHeader';
import MainSider from './MainSider';
import { Switch, Route, RouteProps } from 'react-router-dom';
import routes from '../../routes'

const { Content } = Layout

const Main: React.SFC<{}> = (props) => {
    const [collapse, setCollapse] = React.useState(true);

    const isMobile = useMedia({
        onChange: val => {
            setCollapse(true);
        },
        query: "(max-width:599px)"
    })[0];

    return (
        <>
            <Layout style={{ height: "100vh" }}>
                <MainSider collapse={collapse} onCollapse={val => setCollapse(val)} isMobile={isMobile} />
                <Layout>
                    <MainHeader collapsed={collapse} onCollapse={() => setCollapse(!collapse)} />
                    <Content>
                        <Switch>
                            {routes.map((route, idx) => {
                                console.log(route)
                                return (
                                    <Route key={idx} {...route} />
                                )
                            })}
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </>
    )

}

export default Main