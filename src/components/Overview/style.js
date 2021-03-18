import styled from "styled-components";

export const OverviewStyle = styled.div`
  h1 {
    text-align: center;
    font-size: 32px;
  }
  .flex-content {
    display: flex;
    align-items: center;
  }
  .half-content {
    flex-basis: 50%;
    padding-right: 50px;
    line-height: 24px;
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
`;
