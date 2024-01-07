/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import useCloseOutside from "../../hooks/useCloseOutside";

interface Props {
  className?: string;
  children: ReactNode;
}
interface ModalProps {
  openName: string;
  open: (open: string) => void;
  close: () => void;
}
interface OpenProps {
  children: ReactNode;
  opens: string;
}
interface WindowProps {
  children: ReactNode;
  name: string;
  className?: string;
}
const ModalContext = createContext<ModalProps>({} as ModalProps);
function Modal({ children }: Props) {
  const [openName, setOpenName] = useState("");
  const open = (opens: string) => setOpenName(opens);
  const close = () => setOpenName("");

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }: OpenProps) {
  const { open } = useContext(ModalContext);
  return cloneElement(children as any, {
    onClick: () => open(opens),
    id: "Open",
  });
}

function Window({ children, name, className }: WindowProps) {
  const { openName, close } = useContext(ModalContext);
  const ref = useCloseOutside(close);
  if (openName !== name) return null;

  return createPortal(
    <div ref={ref} className={className}>
      {cloneElement(children as any, {
        onClick: () => close(),
      })}
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;
export default Modal;
