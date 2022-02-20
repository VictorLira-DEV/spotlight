import { ReactNode } from "react";
import Header from "./Header";
import { StyledLayout } from "../styles/Layout.styled";
import Footer from "../layoult/Footer";

interface Iprops {
  children: ReactNode;
}
function Layout(props: Iprops) {
  return (
    <StyledLayout>
      <Header />
      {props.children}
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
