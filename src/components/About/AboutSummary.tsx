import * as React from "react";
import "./About.css";
interface IAboutSummaryProps {}

const AboutSummary: React.FunctionComponent<IAboutSummaryProps> = (props) => {
  return (
    <div className="about_text">
      <h2>Hi my name is Joab Smith</h2>
      <h3>
        I am a fullstack engineer who has worked on multiple projects. The
        technologies used range from React and React Native on the frontend and
        Node.js and Springboot on the backend.
      </h3>
      <a href="#">Learn more</a>
    </div>
  );
};

export default AboutSummary;
