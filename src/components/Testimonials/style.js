  import styled from 'styled-components';


export const StyledItem = styled.div`
    display: flex;
    padding: 1em 2em;
    background: white;
    width: 592px;
    margin: 2em;
    justify-items: center;
    height: inherit;
  p {
    font-size: 16px;
    line-height: 32px;
    text-align: justify;
  }
  img {
    /* position: absolute;
    top: 0;
    left: 0; */
    width: 80%;
    /* margin: 0.5em; */
    /* object-fit: cover; */
  }
  .logo {
    width: 20%;
  }
  .description {
    width: 80%;
    /* margin: 2em; */
  }
  .identity {
    font-size: 16px;
    /* line-height: 24px; */
  }
  .identity-item {
    margin-right: 0.5em;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 990px) {
    margin-top: 4rem;
    width: 90%;
      .highlight-item {
        flex-direction: column;
        margin: 2em;
        width: 380px;
        min-height: 250px;
        text-align: center;
      }
      img {
        position: relative;
        width: 90%;
      }
      .identity {
        flex-direction: column;
      }
      .logo {
        
      }
  }
`
export const StyledList = styled.div`
    display: flex;
    background: #F5F9E7 67%;
    padding: 2em;
    max-width: 100%;
    justify-content: center;
    @media(max-width: 990px) {
      flex-direction: column;
      align-items: center;
      justify-items: center;
      /* margin-top: 2.5em; */
    }
`

export const StyledContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    .heading {
      text-align: center;
    }
    h1 {
      font-size: 44px;
      margin-bottom: 2rem;
      font-weight: bold;
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
`
export const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: -3em;
    text-align: center;
    align-items: center;
    @media(max-width: 657px) {
      margin-bottom: -4em;
      /* width: 40%; */
    }
`

export const StyledHeading = styled.div`
    background: ${props => props.color? 'green': 'white'};
    color: ${props => props.color? 'white': 'black'};
    /* width: 25%; */
    padding-left: 2rem;
    padding-right: 2rem;
    /* height: 128px; */
    display: flex;
    align-items: center;
    cursor: pointer;

    h2 {
    font-size: 24px;
  }

    @media (max-width: 990px) {
    h2 {
      font-size: 20px;
    }
  }
  @media(max-width: 790px) {
      /* padding: 3em; */
      width: 100%;
      font-size: 14px;
      line-height: 40px;
    }

  @media (max-width: 516px) {
    h2 {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 16px;
    }
  }

`