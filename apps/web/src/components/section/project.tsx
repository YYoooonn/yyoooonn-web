import { LandingSectionContainer } from "@/ui/section";

import * as style from "./project.css";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/assets/projects";
import { TranslateIcon } from "@/ui/animated/icon";

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleSelectProject = (index: number) => {
    if (selectedProject === index) {
      setSelectedProject(null);
    } else {
      setSelectedProject(index);
    }
  };

  return (
    <LandingSectionContainer>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "16px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            selected={selectedProject === index}
            handleSelect={() => handleSelectProject(index)}
            title={project.title}
            sources={project.sources}
            tag={project.tag}
            date={project.date}
          />
        ))}
      </div>
    </LandingSectionContainer>
  );
}

interface ProjectCardProps {
  title: string;
  sources: string[];
  tag: string;
  date: string;
  selected?: boolean;
  handleSelect?: () => void;
}

function ProjectCard({
  title,
  sources,
  tag,
  date,
  selected = false,
  handleSelect,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sources.length);
  };
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + sources.length) % sources.length);
  };
  return (
    <div
      className={selected ? style.cardSelected : style.cardStyle}
      onClick={() => handleSelect?.()}
    >
      <ProjectInfo
        title={title}
        images={sources}
        tag={tag}
        date={date}
        selected={selected}
        handleClick={(i) => {
          setCurrentImage(i);
        }}
      />
      {selected && (
        <ImageViewer
          images={sources}
          index={currentImage}
          nextImage={nextImage}
          prevImage={prevImage}
        />
      )}
    </div>
  );
}

function ImageViewer({
  images,
  index,
  nextImage,
  prevImage,
}: {
  images: string[];
  index: number;
  nextImage: () => void;
  prevImage: () => void;
}) {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        minWidth: 0,
        cursor: "default",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <span
        style={{
          width: "32px",
          height: "100%",
          flexShrink: 0,
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => prevImage()}
        onMouseEnter={(e) => setLeftHovered(true)}
        onMouseLeave={(e) => setLeftHovered(false)}
      >
        <TranslateIcon toggle={leftHovered} size={32} delay={0}>
          <Arrow flip={false} />
        </TranslateIcon>
      </span>
      <span
        style={{
          flexGrow: 1,
          flexShrink: 1,
          display: "flex",
          height: "100%",
          width: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          src={images[index] ?? "/images/placeholder.png"}
          alt={`project source ${index}`}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </span>
      <span
        style={{
          width: "32px",
          height: "100%",
          flexShrink: 0,
          cursor: "pointer",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => nextImage()}
        onMouseEnter={(e) => setRightHovered(true)}
        onMouseLeave={(e) => setRightHovered(false)}
      >
        <TranslateIcon toggle={rightHovered} size={32} reverse={true}>
          <Arrow flip={true} />
        </TranslateIcon>
      </span>
    </div>
  );
}

interface ProjectInfoProps {
  title: string;
  selected?: boolean;
  date?: string;
  description?: string;
  images?: string[];
  tag?: string;
  link?: string;
  handleClick?: (i: number) => void;
}

function ProjectInfo({
  title = "untitled",
  date,
  selected = false,
  description,
  images,
  tag,
  handleClick,
}: ProjectInfoProps) {
  return (
    <div className={style.projectInfoContainer}>
      <div className={style.projectTextContainer}>
        <p>{date ?? 2025} | </p>
        <p>{title}</p>
      </div>
      {/* <div className={style.projectImageContainer}>
                {images?.map((src, i) => (
                    <span key={i} style={{width: "max-content", height: "64px", marginRight: "4px", alignContent: "center"}} onClick={(e) => {
                        if (selected) {
                            e.stopPropagation();
                            handleClick?.(i)
                        }
                    }}>
                        <Image src={src} alt={`project source ${i}`} width={64} height={64} style={{width: "auto", height: "100%", border: "1px solid", borderColor: "black", objectFit: "cover"}} priority={true}/>
                    </span>
                ))}
                <span style={{width:"32px", height: "64px", backgroundColor: themeVars.color.background, border: "1px solid black"}}></span>
            </div> */}
    </div>
  );
}

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: flip ? "scaleX(-1)" : "none",
        padding: "4px",
      }}
    >
      <Image
        placeholder="empty"
        src={`/icons/arrowLeft.svg`}
        alt={`arrow left icon`}
        width={16}
        height={16}
      />
    </div>
  );
}
