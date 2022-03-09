import { FC } from "react";
import AboutSummary from "../../components/About/AboutSummary";
import Header from "../../components/HeaderImage/Header";
import NavBar from "../../components/NavBar/NavBar";
import SkillsSection from "../../components/Skills/SkillsSection";

const MainPage: FC = (props) => {
  return (
    <div className="main">
      <NavBar />
      <Header />
      <SkillsSection />
    </div>
  );
};

export default MainPage;
