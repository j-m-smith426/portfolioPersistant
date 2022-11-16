import { FC } from "react";
import "./Link.scss";
interface ILinkProps {
	href?: string;
	children: string;
	class: String;
	onClick: () => void;
}

const Link: FC<ILinkProps> = (props) => {
	return (
		<button className={`btn btn${props.class}`} onClick={() => props.onClick()}>
			{props.href ? (
				<a href={props.href} className={`link`}>
					{props.children}
				</a>
			) : (
				<p className={`link`}>{props.children}</p>
			)}
		</button>
	);
};

export default Link;
