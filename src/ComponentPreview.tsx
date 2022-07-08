import { ContainerComponent } from "./componentTypes";
import { Container } from "./components/container";

const ComponentPreview = ({ component }: { component: ContainerComponent }) => {
	return (
		<div
			style={{
				position: "relative",
				width: component.frame.width,
				height: component.frame.height,
			}}
		>
			<Container component={component} />
		</div>
	);
};

export default ComponentPreview;
