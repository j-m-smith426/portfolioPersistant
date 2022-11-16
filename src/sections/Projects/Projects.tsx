import { FC, useState } from "react";
import "./Projects.scss";
import projectArray from "../../assets/projects/projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { IProject } from "../../Models/models";
import ModelData from "../../components/ModelData/ModelData";
interface IProjectsProps {}

const Projects: FC<IProjectsProps> = (props) => {
	const [modelData, setModelData] = useState<IProject | null>(null);
	const { projects } = projectArray;
	return (
		<>
			{modelData && (
				<div className="model">
					<div className="model__box">
						<ModelData data={modelData} setModel={setModelData} />
					</div>
				</div>
			)}
			<section className="projects" id="projects">
				{projects.map((proj) => (
					<ProjectCard {...proj} setData={setModelData} />
				))}
			</section>
		</>
	);
};

export default Projects;
