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
  }
  .shadow {
    background: rgba(23, 24, 37, 0.7);
    width: 60%;
    margin: auto 20%;
    padding: 40px 50px;
  }

  @media (max-width: 790px) {
    margin-top: 90px;
    .shadow {
      padding: 20px 70px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 40px;
      line-height: 42px;
    }
  }
`;
