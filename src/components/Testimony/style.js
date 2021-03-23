import styled from "styled-components";

export const TestimonyStyle = styled.div`
  margin: 50px 0px;

  .background {
    position: relative;
    background: #eef7ec;
    border: 10px solid #eef7ec;
    width: 60%;
    margin: 10px 20%;
    display: flex;
    padding: 15px 0px;
  }
  .background:after,
  .background:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  .background:after {
    border-color: rgba(238, 247, 236, 0);
    border-top-color: #eef7ec;
    border-width: 30px;
    margin-left: -30px;
  }
  .background:before {
    border-color: rgba(238, 247, 236, 0);
    border-top-color: #eef7ec;
    border-width: 36px;
    margin-left: -36px;
  }

  .background span {
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 98px;
    font-feature-settings: "liga" off;
    color: #34a853;
    padding: 5px 0px 10px 30px;
  }

  .background p {
    padding: 0px 20px;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    font-feature-settings: "liga" off;
  }

  .student-section {
    display: flex;
    margin: 40px 20px;
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
  }

  .student-info p {
    font-size: 14px;
  }

  @media (max-width: 790px) {
    .background {
      width: 80%;
      margin: 10px 12% 10px 8%;
    }
  }

  @media (max-width: 480px) {
    .background {
      width: 80%;
      margin: 10px 13% 10px 7%;
    }
    .student-section {
      margin: 20px 20px 20px 0px;
    }
  }
`;
