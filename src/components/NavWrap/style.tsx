import styled from 'styled-components';


export const NavWrapStyle = styled.div<{maxWidth?: string}>`
  display: flex;
  width: 100%;
  margin: 15px 0;
  align-items: center;
  justify-content: space-between;
  
  .ham-menu {
    display: none;
  }
  .left-nav {
    display: flex;
    flex-basis: 75%;
    align-items: center;
  }
  .right-nav {
    display: flex;
    flex-basis: 15%;
    text-decoration: none;
    border: 1px solid transparent;
    justify-content: center;
    border-image-source: linear-gradient(to right, #34a853, #b8d344);
    border-image-slice: 1;
  }

  @media (max-width: 790px) {
    display: block;
    width: 100%;
    margin: 0%;
    max-width: ${({ maxWidth }: any) => maxWidth ? maxWidth : "100%"};

    .left-nav {
      display: none;
    }
    .right-nav {
      display: none;
    }

    .ham-menu {
      display: flex;
      width: 100%;
      align-items: center;
    }
    .menu {
      color: ${({ color }) => (color ? color : "#171825")};
      flex-basis: 10%;
    }
    .menu-logo {
      flex-basis: 90%;
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
    max-width: ${({ maxWidth }: any) => maxWidth ? maxWidth : "100%"};
    .menu {
      flex-basis: 15%;
    }
    .menu-logo {
      flex-basis: 85%;
    }
  }
`;
