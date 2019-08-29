import React from 'react'
import {
    AppHeader,
    AppSidebar,
    AppSidebarHeader,
    AppSidebarForm,
    AppSidebarNav,
    AppSidebarFooter,
    AppSidebarMinimizer,
    AppBreadcrumb,
    AppFooter
} from '@coreui/react';

import useReactRouter from 'use-react-router'
import { Switch, Route } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap'
import routes from '../../routes';
import navigation from '../../_nav';
import DefaultHeader from './DefaultHeader';
const DefaultLayout = (props) => {
    const { location } = useReactRouter();

    return (

        <div className="app">
            <AppHeader>
                <DefaultHeader />
            </AppHeader>
            <div className="app-body">
                <AppSidebar fixed display="lg">
                    <AppSidebarHeader />
                    <AppSidebarForm />
                    <AppSidebarNav navConfig={navigation} />
                    <AppSidebarFooter />
                    <AppSidebarMinimizer />
                </AppSidebar>
                <main className="main">
                    {
                        location.pathname === '/'
                            ?
                            <Breadcrumb>
                                <BreadcrumbItem active>{routes.find(a => a.path == '/').name}</BreadcrumbItem>
                            </Breadcrumb>
                            : <AppBreadcrumb appRoutes={routes} />
                    }
                    <Container fluid>
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
                    </Container>
                </main>
            </div>
            <AppFooter>
                StockApp &copy; Tüm Hakları Saklıdır.
                </AppFooter>
        </div>

    )
}

export default DefaultLayout;