import { ReactNode } from "react";

export interface ModalHandler {
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}

export interface ModalProps {
  title: string;
  support?: string;
  children: ReactNode;
  hasCloseButton?: boolean;
}