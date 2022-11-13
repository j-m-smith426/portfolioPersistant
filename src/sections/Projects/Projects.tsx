import { FC } from "react";
import LoadingCard from "../../components/LoadingCard/LoadingCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.scss";
interface IProjectsProps {}

const Projects: FC<IProjectsProps> = (props) => {
	return (
		<section className="projects">
			<LoadingCard />
			<ProjectCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
			<LoadingCard />
		</section>
	);
};

export default Projects;
