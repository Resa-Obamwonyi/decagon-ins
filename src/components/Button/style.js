import styled from 'styled-components';


export const ButtonStyle = styled.button`
  background: ${({disabled})=>disabled?"red":"linear-gradient(96.67deg, #34a853 0%, #b8d344 100%)"};
  width: ${({ width }) => (width ? width : "180px")};
  height: 52px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
`;
