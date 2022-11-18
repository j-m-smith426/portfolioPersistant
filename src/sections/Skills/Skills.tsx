import { FC, useState } from "react";
import "./Skills.scss";

interface ISkillsProps {}

const Skills: FC<ISkillsProps> = (props) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};
	return (
		<section className="skills" id="Skills">
			{open ? (
				<h2 onClick={() => handleClick()}>Skills &#129081;</h2>
			) : (
				<h2 onClick={() => handleClick()}>Skills &#129083;</h2>
			)}
			<div className={`list__box ${open ? "open" : ""}`}>
				<ul className="list">
					<li className="list__title">Frontend</li>
					<li>html</li>
					<li>css</li>
					<li>sass</li>
					<li>bootstrap</li>
					<li>typescript</li>
					<li>react</li>
					<li>react native</li>
					<li>redux</li>
				</ul>
				<ul className="list">
					<li className="list__title">Backend</li>
					<li>node.js</li>
					<li>express.js</li>
					<li>Java</li>
					<li>Spring Boot</li>
					<li>Mysql</li>
					<li>nosql</li>
					<li>aws serverless</li>
				</ul>
				<ul className="list">
					<li className="list__title">Other</li>
					<li>jest</li>
					<li>enzyme</li>
					<li>junit</li>
					<li>git</li>
					<li>docker</li>
					<li>postman</li>
					<li>vscode</li>
					<li>agile</li>
					<li>scrum</li>
				</ul>
			</div>
		</section>
	);
};

export default Skills;
