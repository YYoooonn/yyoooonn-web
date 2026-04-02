export const projects: Project[] = [
  {
    title: "Gemini 3D Editor",
    tag: "web/app",
    date: "2025",
    sources: ["/images/llm/2.png"],
    description: "Editor for 3D scenes with LLM integration.",
    link: "/canvas",
    git: "https://github.com/YYoooonn/yyoooonn-web",
  },
  {
    title: "Web 3D Editor",
    tag: "web/app",
    date: "2024",
    sources: [],
    description: "Collaborative 3D editor with archive functionality.",
    link: "http://ec2-3-39-43-240.ap-northeast-2.compute.amazonaws.com/",
    git: "https://github.com/YYoooonn/aiml-mono",
  },
  {
    title: "XREAL",
    tag: "web/app",
    date: "2023",
    sources: [],
    description: "Homepage for XREAL, showcasing design and functionality.",
    link: "https://xrealbranding.vercel.app/",
    git: "https://github.com/YYoooonn/xreal-home",
  },
  {
    title: "EditCollective",
    tag: "geometry",
    date: "2022-2024",
    sources: [
      "/images/flexity/1.png",
      "/images/flexity/2.png",
      "/images/flexity/3.png",
    ],
    description: "SaaS platform for architects and developers.",
    link: "https://flexity.app/",
  },
  {
    title: "Data Analysis & Visualization",
    tag: "geometry",
    date: "2022-2024",
    sources: [],
    description: "Data analysis and visualization projects",
    link: "",
  },
  {
    title: "ARCH",
    tag: "arch",
    date: "2017-2024",
    sources: [],
    description: "architecture portfolio, flipbook",
    link: "/arch",
  },
];

type Project = {
  title: string;
  tag: string;
  date: string;
  sources: string[];
  description: string;
  link: string;
  git?: string;
};
