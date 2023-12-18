import { Dispatch, FC, SetStateAction } from "react";
import { IProject } from "../../Models/models";
import Link from "../Link/Link";

interface IProps {
	data: IProject;
	setModel: Dispatch<SetStateAction<IProject | null>>;
}

const ModelData: FC<IProps> = (props) => {
	const { data } = props;
	const imageSrc =
		data.image !== "NULL"
			? data.image
			: `/assets/${data.name.toLowerCase()}.jpg`;
	const handelClick = () => {
		props.setModel(null);
	};
	return (
		<>
			<div className="model__image">
				<img
					src={imageSrc}
					alt="Project Image"
					className="model__image--content"
				/>
			</div>
			<div className="model__content">
				<h2>{data.name}</h2>
				<p>{data.description}</p>
				<Link class="--main" onClick={handelClick}>
					Close
				</Link>
			</div>
		</>
	);
};

export default ModelData;
