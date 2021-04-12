import styled from 'styled-components';


export const StyledDiv = styled.div`
  .highlight-item {
    display: flex;
    margin: 15px 0;
    align-items: center;
    padding-right: 4em;
  }
  h2 { 
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;

  }
  p {
    font-size: 16px;
    line-height: 32px;
    text-align: justify;
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
  h1 {
    font-size: 44px;
    line-height: 44px;
  }

    @media (max-width: 990px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 516px) {
    h1 {
    font-size: 35px;
  }
  }

  @media (max-width: 480px) {
    h1 {
    font-size: 28px;
  }
  }
`;

export const StyledContainer = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-top: 80px;
  line-height: 24px;
  color: #171825;

  .container {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3em;
    margin-top: 3em;

  }
  @media (max-width: 675px) {
    margin-top: 0;

    .container {
      width: 100%;
      padding-left: 1em;
    }
  }
`
