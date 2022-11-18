import { FC } from "react";
import "./Header.scss";
import profile from "../../assets/JoabSmith.jpg";
import Link from "../../components/Link/Link";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props) => {
	return (
		<header className="header">
			<h2 className="heading-2">Joab Smith</h2>
			<h3 className="heading-3">Software Engineer</h3>
			<img src={profile} alt="Profile Picture" className="header__img" />

			<Link href="/assets/JoabSmithResume.pdf" class="--main" resume>
				View Resume
			</Link>
		</header>
	);
};

export default Header;
