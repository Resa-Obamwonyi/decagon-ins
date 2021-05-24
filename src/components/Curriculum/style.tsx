import styled from "styled-components";

export const CurriculumStyle = styled.div`
  h1 {
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #171825;
  }

  .main-div p {
    font-size: 16px;
    line-height: 24px;
    color: #171825;
    width: 95%;
  }
  .flex-content {
    display: flex;
    align-items: center;
  }
  .half-content {
    flex-basis: 100%;
    padding-right: 50px;
    line-height: 25px;
    color: #171825;

    p {
      font-size: 16px;
    }
    h2 {
      font-size: 24px;
    }
  }

  .full-content {
    line-height: 25px;
    color: #171825;
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 24px;
    }
  }

  .photo {
    flex-basis: 50%;
  }

  .stackdiv {
    display: flex;
  }

  @media (max-width: 560px) {
    .flex-content {
      display: block;
      align-items: left;
    }

    .half-content {
      flex-basis: 100%;
      padding-right: 0px;
    }
    .stackdiv {
      display: block;
    }
  }
`;
