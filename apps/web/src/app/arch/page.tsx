// import { ProjectImage, ProjectItem, ProjectSection, ProjectTitle } from "@/components/section/project";
import FlipBookWrapper from "@/components/flipbook/FlipBookWrapper";
import { Suspense } from "react";
import { ArchPortfolio } from "./FlipBook";

export default function ArchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArchPortfolio />
    </Suspense>
  );
}

// function Test() {
//   return(
//     <div >
//       <h2 style={{ paddingLeft: "8px"}}>arch</h2>
//       <ProjectSection type="arch" title="Green Mining : Carbon" subtitle="samcheonpo powerplant renovation">
//         <ProjectImage src="/images/test.png" alt="diagram test" />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//         <ProjectItem />
//       </ProjectSection>
//       <ProjectSection type="arch" title="arch" />
//       <ProjectSection type="arch" title="arch" />
//       <ProjectSection type="arch" title="arch" />
//       <ProjectSection type="arch" title="arch" />
//       <Divider />
//       <ProjectSection type="dev" title="DEV" />
//       <ProjectSection type="dev" title="DEV" />
//       <ProjectSection type="dev" title="DEV" />
//       <ProjectSection type="dev" title="DEV" />
//     </div>
//   )
// }

// function Divider() {
//   return <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />;
// }

// function ArchModal() {
//   return (
//     <div style={{ padding: "20px", borderRadius: "8px" }}>
//       <h2>Architecture Modal</h2>
//       <p>This is a modal for the architecture section.</p>
//     </div>
//   );
// }
