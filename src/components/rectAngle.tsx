import React from "react";
import { RectangleComponent } from "../componentTypes";
import { getColor, getRect, getStroke } from "../utils/index";

export const Rectangle = ({ component }: { component: RectangleComponent }) => {
	let rectAngleStyle = {
		...getRect(component.frame),
		...getStroke(component.border),
		backgroundColor: getColor(component.backgroundColor),
		borderRadius: `${component.cornerRadius}px`,
	} as React.CSSProperties;
	return <div style={rectAngleStyle} />;
};
