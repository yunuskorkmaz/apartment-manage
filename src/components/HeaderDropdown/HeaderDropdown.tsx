import React from 'react';
import { Dropdown } from 'antd';
import { DropDownProps } from 'antd/lib/dropdown';
import classNames from 'classnames';

declare type OverlayFunc = () => React.ReactNode;

export interface HeaderDropdownProps extends DropDownProps {
    overlayClassName?: string;
    overlay: React.ReactNode | OverlayFunc;
    placement?:
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomCenter';
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({
    overlayClassName: cls,
    overlay,
    ...restProps
}) => (
    <>
        <Dropdown
            overlay={<>{overlay}</>}
            overlayClassName={classNames('header-dropdown-container',cls    )}
           {...restProps}
        />
    </>)
    ;

export default HeaderDropdown

    // interface HeaderDropdownProps extends DropDownProps {
// }

// function HeaderDropDown ({overlayClassName : cls, overlay, ...props} : HeaderDropdownProps) : JSX.Element
// {
//     const overlayContent = (
//         <>
//             {overlay}
//         </>
//     )
//     return (
//         <>
//             <Dropdown overlay={overlayContent} overlayClassName={'header-dropdown-container' + cls} {...props} >
//                 test2
//             </Dropdown>
//         </>
//     ) 
// }

// export default HeaderDropDown;