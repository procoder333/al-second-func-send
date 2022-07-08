import { Color, Rect, Stroke } from "../componentTypes";
export const getRect = (rect: Rect | undefined) => {
	return rect
		? {
				position: `absolute`,
				left: `${rect.x}px`,
				top: `${rect.y}px`,
				width: `${rect.width}px`,
				height: `${rect.height}px`,
		  }
		: "";
};

export const getStroke = (stroke: Stroke | undefined) => {
	return stroke
		? {
				border: `${stroke.width}px solid rgb(${stroke.color.r}, ${stroke.color.g}, ${stroke.color.b}, ${stroke.color.a})`,
		  }
		: {};
};

export const getColor = (color: Color | undefined) => {
	return color
		? `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${
				color.a * 255
		  })`
		: "";
};
