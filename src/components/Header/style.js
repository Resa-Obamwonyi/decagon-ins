import styled from "styled-components";

export const HeaderStyle = styled.div`
  position: ${({ position }) =>
    position ? position : "fixed"};
  top: 0px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#ffffff"};
  width: 100% !important;
  z-index: 999;
  display: flex;
`;