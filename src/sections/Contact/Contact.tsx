import { FC } from "react";
import "./Contact.scss";

interface IContactProps {}

const Contact: FC<IContactProps> = (props) => {
	return (
		<section className="contact" id="Contact">
			<div className="contact__image--box">
				<img src="./assets/typing.jpg" alt="mailbox" />
			</div>
			<div className="contact__info">
				<h2>Contact Me</h2>
				<p>&#128379;: (440) 773-7270</p>
				<p>&#9993;: joabsmith4226@gmail.com</p>
				<form name="Contact" method="POST" data-netlify="true">
					<p>
						<label htmlFor="name"> Name:</label>
						<input id="name" type="text" name="name" className="input" />
					</p>
					<p>
						<label htmlFor="email"> Email:</label>
						<input id="email" type="email" name="email" className="input" />
					</p>
					<p>
						<label htmlFor="message"> Message: </label>
						<textarea
							name="message"
							id="message"
							cols={30}
							rows={10}
							className="input"
						></textarea>
					</p>
					<p className="submit--box">
						<button type="submit" className="form__submit">
							Submit
						</button>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Contact;
