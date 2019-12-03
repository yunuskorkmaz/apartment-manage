import { DropdownToggle, DropdownMenu, Dropdown, DropdownItem, Badge } from "reactstrap";

import React, { Component } from 'react';
export default class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle() {
        this.setState({
            open: !this.state.open
        })
    }

    static Toggle = DropdownToggle
    static Menu = DropdownMenu
    static Item = DropdownItem
    render() {
        const { children, ...attributes } = this.props;
        return (
            <Dropdown nav isOpen={this.state.open} toggle={this.toggle.bind(this)} {...attributes}>
                {children}
            </Dropdown>);
    }
}