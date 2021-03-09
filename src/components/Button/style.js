import styled from 'styled-components';


export const ButtonStyle = styled.button`
  font-family: "Stylish", sans-serif;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#ffaffc"};
  width: ${({ width }) => width};
  height: 50px;
  margin: 15px 20px 10px 0px;
  border-radius: 5px;
  border: ${({ border }) => (border ? border : "none")};
  a {
    text-decoration: none;
    color: ${({ color }) => (color ? color : "#171825")};
    font-size: 16px;
    font-weight: 600;
  }
`;
