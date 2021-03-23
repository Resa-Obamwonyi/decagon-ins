import styled from 'styled-components';


export const StyledDiv = styled.div`
  .highlight-item {
    display: flex;
    margin: 15px 0;
    align-items: center;
    padding-right: 4em;
  }
  h2 { 
    font-size: 24px;
    line-height: 32px;
  }
  .description {
    font-size: 1.2em;
    line-height: 2em;
    text-align: justify;
    font-family: "Mulish", sans-serif;
    font-style: normal;
  }
  .logo {
    margin-right: 2em;
  }
`;

export const StyledList = styled.div`
  .list {
    display: flex;
  }
  @media (max-width: 675px) {
    .list {
      flex-direction: column;
      align-items: center;
      margin-bottom: 3em;
    }
    flex-direction: column;
    align-items: center;
    margin-bottom: 3em;
  }
`;

export const StyledTitle = styled.h1`
  .heading {
    font-size: 1em;
    max-width: 800px;
  }
`

export const StyledContainer = styled.div`
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #171825;

  .container {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3em;
  }
  @media (max-width: 675px) {
    margin-top: 0;
  }
`
