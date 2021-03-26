import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 90%;
  max-height: 100%;
  margin: 0 auto;
  margin-bottom: 3em;
  font-weight: 900;
  font-family: "Mulish", sans-serif;
  font-weight: normal;

  strong {
    font-style: bold;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .about-pic {
    width: 448px;
    margin-right: 6rem;
  }

  .about-pic > img {
    width: 100%;
  }

  .about-decagon {
    width: 65%;
  }

  .about-decagon > h2 {
    font-size: 48px;
    line-height: 40px;
  }

  .about-decagon > p {
    font-size: 16px;
    line-height: 32px;
    margin-top: 24px;
    text-align: justify;
  }

  .about-decagon > a {
    text-decoration: none;
    color: #34A853;
    font-weight: 500;
  }

  @media (max-width: 1000px) {
    .about-decagon > h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 800px) {
    .container {
      flex-direction: column;
      align-items: center;
      padding: 2em;
    }
    .about-decagon {
      width: 100%;
      margin: 0;
      padding-left: 0;
    }
    .about-pic {
      min-width: 80%;
    }
    h2 {
      font-size: 10px;
      line-height: 16px;
  }
  }
`;




