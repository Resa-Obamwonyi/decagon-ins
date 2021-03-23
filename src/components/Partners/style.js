import styled from 'styled-components';


export const StyledItem = styled.div`
  .logo {
    width: 100%;
  }
  img {
    width: 100%;
  }
`
export const StyledList = styled.div`
  padding: 2rem;
  max-width: 100%;

  .list {
    display: flex;
    justify-content: center;
  }
  .list-item {
    display: flex;
  }
  @media(max-width: 675px) {
    margin-bottom: 0;
    .list-item {
      flex-direction: column;
    }
  }
`

export const StyledContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    font-family: "Mulish", sans-serif;

    .elements-items {
      text-align: center;
    }
    
    p {
      font-size: 1.2em;
      line-height: 2em;
      text-align: center;
      margin-bottom: 2em;
      font-family: "Mulish", sans-serif;
      font-style: normal;
      line-height: 16px;
      font-weight: 500;
      font-style: normal;
    }

    h1 {
      font-size: 2.5em;
      font-family: "Mulish", sans-serif;
      font-weight: 700;
      font-style: normal;
      line-height: 64px;
    }

    @media(max-width: 675px) {
      h1 {
        font-size: 1.5em;
      }
      p {
        font-size: 0.8em;
      }
    }
`
