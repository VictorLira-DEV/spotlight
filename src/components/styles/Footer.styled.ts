import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 30px 60px;
  background: rgb(32, 32, 32);
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      list-style: none;
      a {
        color: white;
        text-decoration: none;
      }

      &:not(:last-child) {
        margin-right: 30px;
      }

      span {
        color: rgb(240, 181, 56);
      }
    }
  }
`;

export default StyledFooter;
