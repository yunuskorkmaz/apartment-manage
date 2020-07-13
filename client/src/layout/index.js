import React, { useState } from "react";
import useMedia from "react-media-hook2";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import MainHeader from "./MainHeader";
import MainSider from "./MainSider";

const { Content } = Layout;

const MainLayout = (props) => {
	const [collapse, setCollapse] = useState(true);

	const isMobile = useMedia({
		onChange: (val) => {
			setCollapse(true);
		},
		query: "(max-width:599px)",
	})[0];
	return (
		<Layout style={{ height: "100vh" }}>
			<MainSider
				collapse={collapse}
				onCollapse={(val) => setCollapse(val)}
				isMobile={isMobile}
			/>
			<Layout>
				<MainHeader
					collapsed={collapse}
					onCollapse={() => setCollapse(!collapse)}
				/>
				<Content>
					<Switch>
						{routes.map((route, idx) => {
							return <Route key={idx} {...route} />;
						})}
					</Switch>
				</Content>
			</Layout>
		</Layout>
	);
};

export default MainLayout;
