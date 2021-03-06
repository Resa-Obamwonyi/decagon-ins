import styled from "styled-components";

export const OverviewStyle = styled.div`
${'' /* margin: auto 2.5%; */}
  h1 {
    text-align: center;
    font-size: 32px;
  }
  .full-content {
    line-height: 24px;
    color: #171825;

    p {
      font-size: 16px;
    }
    h2 {
      font-size: 24px;
    }
  }
  .flex-content {
    display: flex;
    align-items: center;
  }
  .half-content {
    ${'' /* flex-basis: 100%; */}
    padding-right: 50px;
    line-height: 24px;
    color: #171825;
    text-align:justify;

    p {
      font-size: 16px;
    }
    h2 {
      font-size: 24px;
    }
  }

  .photo {
    ${'' /* flex-basis: 50%; */}
  }

  @media (max-width: 480px) {
    .flex-content {
      display: block;
      width: 100%;
      align-items: left;
    }
    .half-content {
      flex-basis: 100%;
      padding-right: 0px;
    }

    .photo {
      flex-basis: 100%;
    }
  }
`;
