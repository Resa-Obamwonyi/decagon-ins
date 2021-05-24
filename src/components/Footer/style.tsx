import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 90%;
  margin: auto 5%;
  .upper-footer {
    text-align: center;
    margin-top: 100px;
  }
  .logo {
  }
  .footer-nav {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .lower-footer {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
  }

  .copyright {
    flex-basis: 85%;
  }

  .socials {
    flex-basis: 15%;
  }

  .social-link {
    background: rgba(23, 24, 37, 0.1);
    color: #171825;
    padding: 10px;
    border-radius: 50px;
    font-size: 16px;
    margin-left: 10px;
  }

  @media (max-width: 790px) {
    .copyright {
      flex-basis: 70%;
    }

    .socials {
      flex-basis: 30%;
    }
  }

  @media (max-width: 480px) {
    .copyright {
      flex-basis: 50%;
    }

    .socials {
      flex-basis: 50%;
    }
  }
`;
