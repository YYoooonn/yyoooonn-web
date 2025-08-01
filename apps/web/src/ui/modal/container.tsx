"use client";

import { ReactNode } from "react";
import * as styles from "./modals.css";

interface ModalContainerProps {
  className?: string;
  title?: string;
  onClose: () => void;
  children: ReactNode;
}

export const ModalStyleContainer = ({
  children,
  title,
  onClose,
}: ModalContainerProps) => {
  return (
    <div className={styles.modalContainer} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};
