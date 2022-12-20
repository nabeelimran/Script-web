import OutsideClickDetector from "hooks/OutsideClickDetector";
import useDelayUnmount from "hooks/useDelayUnmount";
import React, { useEffect } from "react";
import BlackScreen from "./BlackScreen";
import UpperRoot from "./UpperRoot";

function Popup({ open, setOpen, children, className, glass = false }) {
  const shouldModalRender = useDelayUnmount(open, 400);
  //   const shouldModalRender = open;
  // const modalRef = OutsideClickDetector(() =>
  //   setOpen(glass === true ? true : false)
  // );

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <>
      <BlackScreen zIndex="1000000" show={open} />

      <UpperRoot>
        {shouldModalRender && (
          <div
            className={`popup-in fixed -translate-x-1/2 -translate-y-1/2  z-[10000000] hide-scrollbar transition-all duration-300 w-full ${
              open
                ? "popup-in pointer-events-auto opacity-100"
                : "popup-out opacity-0 pointer-events-none"
            }`}
          >
            <div className={className}>{children}</div>
          </div>
        )}
      </UpperRoot>
    </>
  );
}

export default Popup;
