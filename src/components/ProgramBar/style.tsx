import styled from "styled-components";

export const ProgramBarStyle = styled.div`
  background: #f8f8f8;
  padding-bottom: 50px;
  .transition-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;
    min-height: 80px;
    background: #f8f8f8;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  }
  .transition-items {
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .transition-items span {
    margin-right: 25px;
    padding: 32px 0px;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
    color: #171825;
    :hover {
      cursor: pointer;
    }
  }
  .transition-items {
    .active {
      color: #34a853;
      border-bottom: 2px solid #34a853;
    }
  }

  .transition-content {
    width: 60%;
    margin: auto 20% ;
  }

  .sticky {
    position: fixed;
    top: 120px;
    z-index: 999;
  }

  @media (max-width: 790px) {
    .transition-content {
      width: 90%;
      margin: auto 5%;
    }
    .transition-items {
      width: 80%;
    }
    .sticky {
      top: 90px;
    }
  }

  @media (max-width: 480px) {
    .transition-content {
      width: 90%;
      margin: auto 5%;
    }

    .transition-items span {
      margin-right: 10px;
      padding: 32px 0px;
      font-size: 12px;
    }
    .transition-items {
      width: 100%;
    }
    .sticky {
      width: 94%;
    }
  }

  @media (min-width: 480px) {
    .sticky {
      width: 96%;
    }
  }
  @media (min-width: 768px) {
    .sticky {
      width: 730px;
    }
  }
  @media (min-width: 992px) {
    .sticky {
      width: 940px;
    }  
  }
  @media (min-width: 1200px) {
    .sticky {
      width: 1130px;
    }
  }
  @media (min-width: 1360px) {
    .sticky {
      width: 1300px;
    }
  }
`;