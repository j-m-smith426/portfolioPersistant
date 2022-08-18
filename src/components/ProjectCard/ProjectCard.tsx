import * as React from "react";
import Link from "../Link/Link";
import "./ProjectCard.scss";

interface IProjectCardProps {}

const ProjectCard: React.FunctionComponent<IProjectCardProps> = (props) => {
	return (
		<div className="card">
			<div className="card__img"></div>
			<div className="card__content">
				<h4 className="card__title card__hover card__hover--1">
					Project Title
				</h4>
				<p className="card__text card__hover card__hover--2">
					Tech stack: FullStack
				</p>
				<p className="card__text card__hover card__hover--3">
					Languages: Javascript, Java
				</p>
				<p className="card__text card__hover card__hover--4">
					Personal Project
				</p>
				<Link href="#" class="--main card__hover--5">
					Learn More
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
