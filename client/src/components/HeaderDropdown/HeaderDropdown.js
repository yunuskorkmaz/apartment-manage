import React from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function HeaderDropDown({overlayClassName:cls,...restProps}) {

    return ( 
        <>
            <Dropdown overlayClassName={classNames('header-dropdown-container',cls)} {...restProps} />
        </>
    )
}

HeaderDropDown.propTypes = {
    overlayClassName: PropTypes.string,
    overlay : PropTypes.any,
    placement : PropTypes.string
}

HeaderDropDown.defaultProps = {
    placement: 'bottomRight'
}


export default  HeaderDropDown;