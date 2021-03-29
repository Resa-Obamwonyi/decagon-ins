import styled from "styled-components";



export const ApplyBannerStyle = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 308px;
  background: url(${({ background }) => background}) no-repeat center center;
  text-align: center;
  h1 {
    font-weight: 800;
    font-size: 48px;
    color: #ffffff;
    padding-top: 120px;
  }

  @media (max-width: 790px) {
    h1 {
      padding-top: 80px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 35px;
      color: #ffffff;
      padding-top: 90px;
    }
  }
`;
