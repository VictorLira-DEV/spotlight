import { StyledBackdrop, StyledPopup } from "../styles/PopUp.styled";
import { ReactNode } from "react";

interface IPopUp {
  onCloseModel: () => void;
  children: ReactNode;
  className?: string;
}

function PopUp(props: IPopUp) {
  return (
    <>
      <StyledBackdrop onClick={() => props.onCloseModel()} />
      <StyledPopup className={props.className}>{props.children}</StyledPopup>
    </>
  );
}

export default PopUp;
