import React from "react";
import { ContainerComponent } from "../componentTypes";
import { getColor, getRect, getStroke } from "../utils/index";
import { Text } from "./text";
import { Rectangle } from "./rectAngle";
import { Ellipse } from "./ellipse";
export const Container = ({ component }: { component: ContainerComponent }) => {
	let containerStyle = {
		...getRect(component.frame),
		backgroundColor: getColor(component.backgroundColor),
		...getStroke(component.border),
		borderRadius: `${component.cornerRadius}px`,
	} as React.CSSProperties;
	return (
		<>
			<div style={containerStyle} />
			{component.children.map((item) => {
				switch (item.type) {
					case "container":
						return <Container component={item} />;
					case "text":
						return <Text component={item} />;
					case "rectangle":
						return <Rectangle component={item} />;
					case "ellipse":
						return <Ellipse component={item} />;
				}
			})}
		</>
	);
};
