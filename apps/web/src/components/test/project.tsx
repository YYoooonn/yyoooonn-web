"use client";

import Image from "next/image";
import { useState } from "react";
import * as styles from "./project.css";

type ProjectType = "arch" | "dev";

type ProjectSectionProps = {
  type?: ProjectType;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function ProjectSection({
  type = "arch",
  title,
  subtitle,
  children,
}: ProjectSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section
      className={styles.projectSection}
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
    >
      {/* <h3>{title ? title : "Default Title"}</h3>
      {subtitle && <h4>{subtitle}</h4>} */}
      {isHovered && <ProjectTitle title={title} />}
      <ProjectContents hovered={isHovered} type={type}>
        {children}
      </ProjectContents>
    </section>
  );
}

function ProjectContents({
  hovered,
  type,
  children,
}: {
  hovered: boolean;
  type: ProjectType;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{ opacity: hovered ? 0.1 : 1 }}
      className={styles.projectContentsContainer}
    >
      {/* <ProjectText text={type}/> */}
      {children}
    </div>
  );
}

export function ProjectTitle({ title }: { title?: string }) {
  return (
    <h4 className={styles.projectTitle}>
      {title ? title : "Default Project Title"}
    </h4>
  );
}

export function ProjectText({ text }: { text: string }) {
  return (
    <h4 style={{ alignContent: "center" }} className={styles.itemBase}>
      {text}
    </h4>
  );
}

export function ProjectItem({ url }: { url?: string }) {
  return <span className={styles.projectItem}>{/* Item content */}</span>;
}

export function ProjectImage({
  src,
  alt = "Project Image",
}: {
  src: string;
  alt?: string;
}) {
  return (
    <div style={{ width: "64px", aspectRatio: "16/9", position: "relative" }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
