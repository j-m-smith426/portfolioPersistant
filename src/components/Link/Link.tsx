import { FC } from "react";
import "./Link.scss";
interface ILinkProps {
	href: string;
	children: string;
	class: String;
}

const Link: FC<ILinkProps> = (props) => {
	return (
		<button className={`btn btn${props.class}`}>
			<a href={props.href} className={`link`}>
				{props.children}
			</a>
		</button>
	);
};

export default Link;
