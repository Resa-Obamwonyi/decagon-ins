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
    // align-items: center;
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
    font-weight: 900;
    font-family: "Manrope", sans-serif;

    .elements-items {
      text-align: center;
    }
    
    p {
      font-size: 1.4em;
      line-height: 2em;
      text-align: center;
      margin-bottom: 2rem;
      font-family: Mulish;
      font-weight: 400;
      font-style: normal;
      line-height: 16px;

    }

    h1 {
      font-size: 3em;
      font-family: Mulish;
      font-weight: 800;
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
