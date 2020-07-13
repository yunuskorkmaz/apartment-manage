import React from "react";
import { Dropdown } from "antd";
import { DropDownProps } from "antd/lib/dropdown";
import classNames from "classnames";

// export interface HeaderDropdownProps extends DropDownProps {
// 	overlayClassName?: string;
// 	overlay: React.ReactNode | OverlayFunc;
// 	placement?:
// 		| "bottomLeft"
// 		| "bottomRight"
// 		| "topLeft"
// 		| "topCenter"
// 		| "topRight"
// 		| "bottomCenter";
// }

const HeaderDropdown = ({ overlayClassName: cls, overlay, ...restProps }) => (
	<Dropdown
		overlay={<>{overlay}</>}
		overlayClassName={classNames("header-dropdown-container", cls)}
		{...restProps}
	/>
);
export default HeaderDropdown;
