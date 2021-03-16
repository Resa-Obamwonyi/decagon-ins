import styled from "styled-components";

export const StudentMainStyle = styled.div`
  width: 100%;
  height: 293px;
  margin-top: 125px;
  background: url(${({ background }) => background}) no-repeat center center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 900;
    font-size: 48px;
    font-style: bold;
    line-height: 64px;
    text-align: center;
    color: #b8d343;
    padding: ${({ padding }) => (padding ? padding : "40px 150px")};
  }
  .shadow {
    background: rgba(23, 24, 37, 0.7);
  }

  @media (max-width: 790px) {
    h1 {
      padding: 20px 70px;
    }
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    h1 {
      padding: 40px 20px;
      font-size: 40px;
      line-height: 42px;
    }
  }
`;
