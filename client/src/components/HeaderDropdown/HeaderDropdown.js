import React from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function HeaderDropDown({ overlayClassName: cls, ...props }) {
    const { overlay ,...restProps} = props;
    const overlatContent = (
        <>
            {overlay}
        </>
    )
    return (
        <>
            <Dropdown overlay={overlatContent} overlayClassName={classNames('header-dropdown-container', cls)} {...restProps} />
        </>
    )
}

HeaderDropDown.propTypes = {
    overlayClassName: PropTypes.string,
    overlay: PropTypes.any,
    placement: PropTypes.string
}

HeaderDropDown.defaultProps = {
    placement: 'bottomRight'
}


export default HeaderDropDown;