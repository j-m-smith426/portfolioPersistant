import { Dispatch, FC, SetStateAction } from "react";
import { IProject } from "../../Models/models";
import Link from "../Link/Link";
import ModelData from "../ModelData/ModelData";
import "./ProjectCard.scss";

interface IProjectCardProps {
	name: string;
	image: string;
	description: string;
	setData: Dispatch<SetStateAction<IProject | null>>;
}

const ProjectCard: FC<IProjectCardProps> = (props) => {
	const imageSrc =
		props.image !== "NULL"
			? props.image
			: `/assets/${props.name.toLowerCase()}.jpg`;

	const handelClick = () => {
		props.setData({
			name: props.name,
			image: props.image,
			description: props.description,
		});
	};
	return (
		<>
			<div className="card">
				<div className="card__img">
					<img src={imageSrc} />
				</div>
				<div className="card__content">
					<h4 className="card__title card__hover ">{props.name}</h4>

					<Link href="" class="--main " onClick={handelClick}>
						Learn More
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
