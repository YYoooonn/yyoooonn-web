import Image from "next/image";
import React from "react";

type BookPageProps = {
  pageNumber: number;
  imgSrc?: string;
  priority?: boolean;
};

export const BookPage = React.memo(
  React.forwardRef<HTMLDivElement, BookPageProps>((props, ref) => {
    return (
      <div ref={ref} style={{ top: 0 }}>
        <Image
          src={props.imgSrc ?? "/placeholder.png"}
          alt={`Page ${props.pageNumber}`}
          width={794}
          height={1123}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          draggable={false}
          data-density="soft"
          className="page-image"
          priority={props.priority ? true : false}
        />
      </div>
    );
  }),
);
