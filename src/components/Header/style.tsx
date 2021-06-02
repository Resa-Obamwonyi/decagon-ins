import styled from "styled-components";

export const HeaderStyle = styled.div<{backgroundColor?: string, position?: string, maxWidth?: string, padding?: string}>`
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
  padding: ${({ padding }: any) => padding ? padding : "0"};

  @media (min-width: 768px) {
    max-width: ${({ maxWidth }: any) => maxWidth ? maxWidth : "730px"};
  }
  @media (min-width: 992px) {
    max-width: ${({ maxWidth }: any) => maxWidth ? maxWidth : "940px"};
  }
  @media (min-width: 1200px) {
    max-width: ${({ maxWidth }: any) => maxWidth ? maxWidth : "1130px"};
  }
  @media (min-width: 1360px) {
    max-width: ${({ maxWidth }: any) => maxWidth ? maxWidth : "1300px"};
  }
`;