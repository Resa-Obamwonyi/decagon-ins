import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  //align-items: center;
  //justify-content: flex-end;
  margin-left: 10%;
  margin-top: 100px;
  margin-bottom: 7em;

  .background-container {
    background-size: cover;
    z-index: 100;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .left {
    margin-top:140px;
    margin-bottom:140px;
    width: 40%;
    background: #171825;
    z-index: 1000;
    padding: 2rem;
    display: flex;
    margin-left: -10%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .left h1 {
    font-size: 2em;
    line-height: 140%;
    color: #b8d343;
  }
  .left p {
    font-size: 0.9em;
    line-height: 150%;
    color: #ffffff;
  }
  .left button {
    outline: none;
    border: none;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
    color: #ffffff;
    cursor: pointer;
  }
  @media (max-width: 1090px) {
    margin-left: 0;
    .background-container {
      width: 100%;
      justify-content: center;
    }
    .left {
      margin-left: 0;
      justify-content: center;
      width: 70%;
      height: 80%;
      padding-bottom: 2em;
      align-items: center;
      opacity: 0.9;
    }
    .left h1 {
      font-size: 35px;
      line-height: 44px;
    }
  }
  @media (max-width: 516px) {
    margin-left: 0;
    .left {
      width: 100%;
      margin-top:0;
      margin-bottom:0;
    }
    .left h1 {
      font-size: 30px;
      line-height: 40px;
    }
  }
  @media (max-width: 480px) {
    margin-left: 0;
    .left {
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      margin-top:0;
      margin-bottom:0;
    }
    .left h1 {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;