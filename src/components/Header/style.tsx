import styled from "styled-components";

export const HeaderStyle = styled.div<{backgroundColor?: string, position?: string}>`
  position: ${({ position }: any) =>
    position ? position : "fixed"};
  top: 0;
  background-color: ${({ backgroundColor }: any) =>
    backgroundColor ? backgroundColor : "#ffffff"};
  width: 100%;
  z-index: 999;
  display: flex;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 15px;

  @media (min-width: 768px) {
    max-width: 730px;
  }
  @media (min-width: 992px) {
    max-width: 940px;
  }
  @media (min-width: 1200px) {
    max-width: 1130px;
  }
  @media (min-width: 1360px) {
    max-width: 1500px;
  }
`;