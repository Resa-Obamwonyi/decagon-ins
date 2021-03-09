import styled from 'styled-components';


export const NavWrapStyle = styled.div`
  display: flex;
  width: 90%;
  margin: 15px 5%;
  align-items: center;
  .left-nav {
    display: flex;
    flex-basis: 85%;
    align-items: center;
  }
  .right-nav {
    display: flex;
    flex-basis: 15%;
    border: 1px solid transparent;
    justify-content: center;
    border-image-source: linear-gradient(to right, #34a853, #b8d344);
    border-image-slice: 1;
  }
`;
