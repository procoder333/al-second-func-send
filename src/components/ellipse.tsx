import React from "react";
import { EllipseComponent } from "../componentTypes";
import { getColor, getRect, getStroke } from "../utils/index";

export const Ellipse = ({ component }: { component: EllipseComponent }) => {
	let ellipseStyle = {
		...getRect(component.frame),
		...getStroke(component.border),
		backgroundColor: getColor(component.backgroundColor),
		borderRadius: `50%`,
	} as React.CSSProperties;
	return <div style={ellipseStyle} />;
};
