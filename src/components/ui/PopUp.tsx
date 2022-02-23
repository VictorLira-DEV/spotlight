import { StyledBackdrop, StyledPopup } from "../styles/PopUp.styled";
import React, { ReactNode } from "react";

interface IPopUp {
  onCloseModel: () => void;
  children: ReactNode;
  className?: string;
}

function PopUp(props: IPopUp) {
  return (
    <React.Fragment>
      <StyledBackdrop onClick={() => props.onCloseModel()} />
      <StyledPopup className={props.className}>{props.children}</StyledPopup>
    </React.Fragment>
  );
}

export default PopUp;
