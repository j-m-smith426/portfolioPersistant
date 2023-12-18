import { FC } from "react";
import "./Header.scss";
import Link from "../../components/Link/Link";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props) => {
	return (
		<header className="header">
			<h2 className="heading-2">Joab Smith</h2>
			<h3 className="heading-3">Software Engineer</h3>

			<Link href="/assets/JoabSmithResume.pdf" class="--main" resume>
				View Resume
			</Link>
		</header>
	);
};

export default Header;
