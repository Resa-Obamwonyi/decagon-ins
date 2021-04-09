import styled from "styled-components";

export const PopUpStyle = styled.div`
  position: absolute;
  width: 100%;
  background: rgba(23, 24, 37, 0.7);
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  justify-content: center;

  .stack-body {
    background: #ffffff;
    left: 0px;
    width: 50%;
    margin: auto 25% auto;
    padding: 20px;
  }

  .close {
    color: #34a853;
    margin-left: 90%;
    :hover {
      cursor: pointer;
    }
  }
  table {
    background: #fafcf4;
  }

  th {
    font-size: 16px;
    color: #ffffff;
    background: #34a853;
    text-align: left;
    padding: 20px;
    width: 100%;
  }
  .time {
    background: #34a853;
    color: #ffffff;
    font-size: 16px;
    padding-left: 20px;
  }
  table,
  td {
    border-top: 1px solid #dcdcdc;
    border-collapse: collapse;
  }
  td {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  p {
    color: #171825;
    padding: 5px 20px;
    line-height: 20px;
    :hover {
      cursor: default;
    }
  }
  h3 {
    color: #171825;
    padding-left: 20px;
  }
  .activity-row {
    width: 80%;
  }
  .time-row {
    width: 20%;
  }
  @media (max-width: 790px) {
    .stack-body {
      width: 90%;
      margin: auto 5% auto;
      padding: 20px;
    }
    .activity-row {
      width: 45%;
    }
    .time-row {
      width: 5%;
    }
  }
  @media (max-width: 480px) {
    .stack-body {
      width: 95%;
      margin: auto 2.5% auto;
      padding: 20px;
    }
    .activity-row {
      width: 45%;
    }
    .time-row {
      width: 5%;
    }
  }
`;