import styled from "styled-components";

export const StudentMainStyle = styled.div`
  width: 1440px;
  height: 293px;
  margin-top: 125px;
  background-image: url(${({ background }) => background});
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 900;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    color: #b8d343;
    padding: 40px 150px;
  }
  .shadow {
    background: #171825;
    opacity: 0.7;
  }
`;
