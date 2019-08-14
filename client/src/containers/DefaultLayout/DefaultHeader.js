import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AppSidebarToggler, AppNavbarBrand, AppHeaderDropdown } from '@coreui/react';
import { Badge, Nav, NavItem } from 'reactstrap';
import NavDropdown from '../../components/Header/NavDropdown';
export default class DefaultHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile />
                <AppNavbarBrand ></AppNavbarBrand>
                <AppSidebarToggler className="d-md-down-none" display="lg" />

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <Link to="/users" className="nav-link">Users</Link>
                    </NavItem>
                    <NavItem className="px-3">
                        <NavLink to="#" className="nav-link">Settings</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem className="d-md-down-none">
                        <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
                    </NavItem>
                    <NavItem className="d-md-down-none">
                        <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
                    </NavItem>
                    <NavItem className="d-md-down-none">
                        <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
                    </NavItem>
                    <NavDropdown>
                        <NavDropdown.Toggle nav >
                            Test
                        </NavDropdown.Toggle>
                        <NavDropdown.Menu>
                            <NavDropdown.Item header tag="div" className="text-center"><strong>Account</strong></NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></NavDropdown.Item>
                            <NavDropdown.Item header tag="div" className="text-center"><strong>Settings</strong></NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-user"></i> Profile</NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-wrench"></i> Settings</NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></NavDropdown.Item>
                            <NavDropdown.Item><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></NavDropdown.Item>
                            <NavDropdown.Item divider />
                            <NavDropdown.Item><i className="fa fa-shield"></i> Lock Account</NavDropdown.Item>
                            <NavDropdown.Item onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</NavDropdown.Item>
                        </NavDropdown.Menu>
                    </NavDropdown>
                </Nav>
            </React.Fragment>

        )
    }
}