import styled from "styled-components";

export const QuestionStyle = styled.div`
  .transition-buttons {
    width: 60%;
    display: flex;
    margin: 50px 20%;
    position: absolute;
    top: 450px;
    z-index: 998;
    font-family: "Mulish-Bold";
  }
  .transition-buttons {
    .active {
      background: #34a853;
      color: #ffffff;
    }
  }
  .transition-buttons span {
    display: flex;
    flex-basis: 33%;
    justify-content: center;
    align-items: center;
    height: 100px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #ffffff;
    box-shadow: 0px 14px 15px rgba(0, 0, 0, 0.03);
    font-size: 24px;
    line-height: 48px;
    color: #171825;
    outline: none;

    :hover {
      cursor: pointer;
    }
  }

  .accordion-div {
    width: 90%;
    margin: 140px 5%;
    background: rgba(245, 249, 231, 0.67);
    opacity: 0.7;
    padding: 100px 0px;
  }

  .accordion {
    width: 80%;
    margin: auto 10%;
  }

  .accordion-title {
    font-weight: bold;
    font-family: "Mulish-Bold";
    outline: none;
    font-size: 18px;
    line-height: 48px;
    color: #171825;
  }

  .accordion-content {
    width: 98%;
    margin: 25px 1%;
  }

  .space-acc {
    display: flex;
    width: 98%;
    justify-content: space-between;
    margin: auto 1%;
    outline: none;
    font-weight: bold;
    font-family: "Mulish-Bold";
  }

  .accordion-active {
    transform: rotateZ(90deg);
  }

  @media (max-width: 790px) {
    .transition-buttons {
      width: 80%;
      margin: 50px 10%;
      position: absolute;
      top: 420px;
    }

    .transition-buttons span {
      width: 33%;
      height: 100px;
      font-size: 16px;
      padding: 5px 10px;
      text-align: center;
      line-height: 25px;
    }
  }

  @media (max-width: 480px) {
    .transition-buttons {
      width: 80%;
      margin: 20px 10%;
      position: absolute;
      top: 400px;
    }

    .transition-buttons span {
      width: 33%;
      font-size: 14px;
      height: 80px;
      padding: 5px 10px;
      text-align: center;
      line-height: 18px;
    }
    .accordion-div {
      margin: 90px 5%;
    }
  }
`;


