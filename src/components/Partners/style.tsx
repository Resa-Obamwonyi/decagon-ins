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
  width: 65%;
  margin: 0 auto;

  .list {
    display: flex;
    justify-content: center;
  }
  .list-item {
    display: flex;
  }
  @media(max-width: 675px) {
    /* .list{
      width: 80%;
    } */
    width: 100%;
    padding: 0;

    margin-bottom: 0;
    .list-item {
      flex-direction: column;
    }
  }
`

export const StyledContainer = styled.div`
    width: 100%;
    //margin: 0 auto;
    margin-top: 80px;
    font-family: "Mulish", sans-serif;

    .elements-items {
      text-align: center;
    }
    
    p {
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      margin-bottom: 2em;
      font-style: normal;
      font-weight: 500;
      font-style: normal;
    }

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

    @media(max-width: 675px) {
      h1 {
        font-size: 40px;
      }
    }
`
