import styled from "styled-components";

export const TestimonyStyle = styled.div`
  width: 100%;
  margin: 50px 0px;
  .background {
    display: flex;
    background: #eef7ec;
    border: 10px solid #eef7ec;
    width: 60%;
    margin: 10px 20%;
  }
  ${
    "" /* .background:after,
  .background:before {
    top: 86%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .background:after {
    border-color: rgba(238, 247, 44, 0);
    border-top-color: #eef7ec;
    border-width: 30px;
    margin-left: -30px;
  }
  .background:before {
    border-color: rgba(NaN, 238, 247, 0);
    border-top-color: #eef7ec;
    border-width: 44px;
    margin-left: -44px;
  } */
  }

  .background span {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 98px;
    font-feature-settings: "liga" off;
    color: #34a853;
    flex-basis: 3%;
    padding: 5px 0px 10px 30px;
  }

  .background p {
    flex-basis: 97%;
    padding: 15px 20px;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    font-feature-settings: "liga" off;
  }

  .student-section {
    display: flex;
    margin: 20px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .student-avatar {
    height: 56px;
    width: 56px;
    padding-right: 15px;
  }

  .student-info {
    float: right;
  }

  .student-info h3 {
    font-size: 16px;
    ${"" /* font-weight: bolder; */}
  }

  .student-info p {
    font-size: 14px;
  }

  @media (max-width: 790px) {
    .background {
      width: 80%;
      margin: 10px 10%;
    }
  }

`;
