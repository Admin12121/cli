import React from "react";
import "./style.css";
import Skills from "./intro/skills";
import NotiFication from "./intro/notification";

const Intro: React.FC = () => {
  return (
    <div className="LayoutContent_root__ZBUya">
      <div className="page_bentoGrid__EhGwY Grid_root__iRfoa">
        <Skills/>
        <NotiFication/>
      </div>
    </div>
  );
};

export default Intro;
