import styled from "styled-components";

export const ApplyBannerStyle = styled.div`
  margin-top: 100px;
  height: 308px;
  background-image: url(${({ background }) => background});
  text-align: center;
  h1 {
    font-weight: 800;
    font-size: 48px;
    color: #ffffff;
    padding-top: 120px;
  }
`;
