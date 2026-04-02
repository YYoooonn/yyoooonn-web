import * as style from "./page.css";

export default function ProjectPage() {
  return (
    <div className={style.pageContainer}>
      {/* <h2>Project Page</h2> */}
      <div style={{ display: "grid" }}></div>
    </div>
  );
}

function ProjectCard() {
  return (
    <div className={style.projectCardContainer}>
      <p>Project 1</p>
      {/* <p>Description of Project 1</p> */}
    </div>
  );
}
