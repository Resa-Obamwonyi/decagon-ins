import styled from "styled-components";

export const FormStyle = styled.div`
  background: #2d2f48;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 50px;
  width: 100%;
  h1 {
    font-weight: 800;
    font-size: 55px;
    line-height: 69px;
    text-align: center;
  }
  .colorcode {
    color: #b8d344;
  }

  p {
    font-weight: normal;
    font-size: 20px;
    line-height: 38px;
    text-align: center;
  }
  .form-area {
    width: 30%;
    margin: 50px 35%;
  }
  input,
  select {
    width: 100%;
    height: 36px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.4);
    background: none;
    border: none;
  }
  input:focus,
  select:focus {
    border: none;
    outline: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #ffffff;
  }

  .label {
    color: #ffffff;
    font-size: 12px;
    text-align: left;
  }

  .wrapper {
    background: rgba(203, 203, 203, 0.2);
    border: 1px solid #ededed;
    box-sizing: border-box;
    padding: 8px 10px 5px;
    margin: 2px 0px 15px;
  }

  .double-input {
    display: flex;
  }
  .double-wrapper-left {
    flex-basis: 48.5%;
    margin-right: 1.5%;
  }
  .double-wrapper-right {
    flex-basis: 48.5%;
    margin-left: 1.5%;
  }

  .btn {
    margin-top: 30px;
  }

  @media (max-width: 790px) {
    .form-area {
      width: 80%;
      margin: 50px 10%;
    }
  }

  @media (max-width: 480px) {
    .form-header {
      margin: auto 20px;
    }
  }
`;
