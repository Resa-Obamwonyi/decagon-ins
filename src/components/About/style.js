import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 90%;
  max-height: 100%;
  margin: 0 auto;
  margin-bottom: 3em;

  .container {
    display: flex;
  }

  .about-pic {
    max-width: 30%;
  }

  .about-pic > img {
    width: 100%;
  }

  .about-decagon {
    width: 65%;
    padding-left: 3em;
  }

  .about-decagon > h2 {
    font-size: 2.5em;
  }

  .about-decagon > p {
    font-size: 1em;
    line-height: 2em;
    text-align: justify;
  }

  .about-decagon > a {
    text-decoration: none;
    color: #34A853;
    font-weight: 500;
  }

  @media (max-width: 675px) {
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
  }
`;




