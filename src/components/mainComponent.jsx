import React from "react";
import "../styles/mainStyles.css";
import Header from "./header";
import SkillComponent from "./skillcomponent";
import CvBackComponent from "./Cv_backComponent";
import SkilsTarjetasComponent from "./skilsTarjetasComponent";
import FooterComponent from "./footerComponent";
import VideoComponent from "./videoComponent";
import ThreeComponent from "./threeComponent";
import LogosComponent from "./logosComponent";

export function MainComponent() {
  return (
    <div className="main-body">
      <Header />
      <CvBackComponent />
      <SkillComponent />
      <SkilsTarjetasComponent />
      <VideoComponent />
      <LogosComponent />
      <ThreeComponent />
      <FooterComponent />
    </div>
  );
}
