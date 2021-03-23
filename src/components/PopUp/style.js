import styled from "styled-components";

export const PopUpStyle = styled.div`
  ${'' /* .shadow {
    background: #171825;
    opacity: 0.7;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;
  } */}

  .stack-body {
    background: #ffffff;
    position: absolute;
    top: 500px;
    left: 0px;
    z-index: 999;
    width: 60%;
    margin: auto 20%;
    padding: 20px;
  }

  .close {
    color: #34a853;
    margin-left: 90%;
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
    padding-top: 10px;
    padding-bottom: 10px;
  }

  p {
    color: #171825;
    padding: 5px 20px;
    line-height: 25px;
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
`;