import React from "react";
import { TextComponent } from "../componentTypes";
import { getColor, getRect } from "../utils/index";
export const Text = ({ component }: { component: TextComponent }) => {
	let textStyle = {
		...getRect(component.frame),
		fontSize: `${component.fontSize}px`,
		fontWeight: `${component.fontWeight}`,
		fontFamily: `${component.fontFamily}`,
		color: getColor(component.textColor),
	} as React.CSSProperties;
	return <div style={textStyle}>{component.content}</div>;
};
