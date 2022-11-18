import { FC } from "react";
import Link from "../../components/Link/Link";
import "./TopNav.scss";

interface ITopNavProps {}

const TopNav: FC<ITopNavProps> = (props) => {
	return (
		<nav className="top-nav">
			<div className="top-nav__icon">JS</div>
			<ul className="top-nav__list">
				<li className="top-nav__item">
					<Link href="/" class="--nav">
						Home
					</Link>
				</li>
				<li className="top-nav__item">
					<Link href="#Projects" class="--nav">
						Projects
					</Link>
				</li>
				<li className="top-nav__item">
					<Link href="#Skills" class="--nav">
						Skills
					</Link>
				</li>
				<li className="top-nav__item">
					<Link href="#Contact" class="--nav">
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default TopNav;
