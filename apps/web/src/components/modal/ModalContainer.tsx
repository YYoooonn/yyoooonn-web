"use client";

import { useModalStore, ModalType } from "@/store/useModalStore";
import { ModalStyleContainer } from "@/components/ui/modal";

function ModalContainer() {
  const { modals, close } = useModalStore();

  return (
    <>
      {modals.map((modal, index) => {
        const ModalComponent = modal.Component;
        const props = modal.props || {};
        const type = modal.type || ModalType.PROJECT;

        return (
          <ModalStyleContainer
            key={index}
            onClose={() => {
              close();
            }}
          >
            <ModalComponent key={index} {...props} type={type} />
          </ModalStyleContainer>
        );
      })}
    </>
  );
}

export default ModalContainer;
