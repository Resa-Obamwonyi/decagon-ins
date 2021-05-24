import styled from "styled-components";

export const HeaderStyle = styled.div<{backgroundColor?: string, position?: string}>`
  position: ${({ position }: any) =>
    position ? position : "fixed"};
  top: 0px;
  background-color: ${({ backgroundColor }: any) =>
    backgroundColor ? backgroundColor : "#ffffff"};
  width: 100% !important;
  z-index: 999;
  display: flex;
`;