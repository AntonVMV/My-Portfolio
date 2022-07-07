import { createPortal } from "react-dom";
import { useEffect } from "react";

interface MainPortalProps {
  children: React.ReactNode;
}

const body = document.querySelector("body")!;

export const MainPortal = ({ children }: MainPortalProps) => {
  const container = document.createElement("div");

  useEffect(() => {
    body.appendChild(container);

    return () => {
      body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};
