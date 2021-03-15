import styled from 'styled-components';


export const NavWrapStyle = styled.div`
  display: flex;
  width: 90%;
  margin: 15px 5%;
  align-items: center;
  
  .ham-menu {
    display: none;
  }
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

  @media (max-width: 790px) {
    display: block;
    width: 100%;
    margin: 0%;

    .left-nav {
      display: none;
    }
    .right-nav {
      display: none;
    }

    .ham-menu {
      display: flex;
      width: 95%;
      margin: auto 2.5%;
      align-items: center;
    }
    .menu {
      color: ${({ color }) => (color ? color : "#171825")};
      flex-basis: 15%;
    }
    .menu-logo {
      flex-basis: 85%;
    }

    .menu-icon {
      font-size: 40px;
    }

    .mobile-nav-menu {
      float: left;
      margin-left: 20px;
    }
  }

  @media (max-width: 480px) {
    .menu {
      flex-basis: 15%;
    }
    .menu-logo {
      flex-basis: 85%;
    }
  }
`;
