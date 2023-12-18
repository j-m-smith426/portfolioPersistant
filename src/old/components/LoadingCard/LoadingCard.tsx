import * as React from "react";
import "./LoadingCard.scss";

interface ILoadingCardProps {}

const LoadingCard: React.FunctionComponent<ILoadingCardProps> = (props) => {
	return (
		<div className="card">
			<div className="shineBG card__img"></div>
			<div className="card__loading">
				<span className="shineBG card__placeholder card__placeholder--1"></span>
				<span className="shineBG card__placeholder card__placeholder--2"></span>
				<span className="shineBG card__placeholder card__placeholder--3"></span>
				<span className="shineBG card__placeholder card__placeholder--4"></span>
				<span className="shineBG card__placeholder card__placeholder--5"></span>
			</div>
		</div>
	);
};

export default LoadingCard;
