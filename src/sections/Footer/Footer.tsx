import { FC } from "react";
import Link from "../../components/Link/Link";
import "./Footer.scss";

interface IFooterProps {}

const Footer: FC<IFooterProps> = (props) => {
	return (
		<footer className="footer">
			<p>
				<div className="top-nav__icon">JS</div> Joab Smith
			</p>
			<Link href="/" class={"--nav footer--btn"}>
				Back to Top
			</Link>
		</footer>
	);
};

export default Footer;
