import styled from 'styled-components';


export const StyledItem = styled.div`

  .highlight-item {
    display: flex;
    padding: 1em;
    background: white;
    width: 592px;
    height: 80%;
    margin: 2em;
    justify-content: center;

  }

  p {
    font-size: 1.2em;
    line-height: 2em;
    text-align: justify;
    font-family: "Mulish", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    margin: 0.5em;
    object-fit: cover;

  }

  .logo {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    width: 20%: 
  }

  .description {
    width: 80%;
    margin: 2em;
  }
  .identity {
    display: flex;
  }
  .identity-item {
    margin-right: 0.5em;
  }
  h2 {
    padding: ;
  }

  @media (max-width: 990px) {
      .highlight-item {
        flex-direction: column;
        margin: 2em;
        width: 380px;
        min-height: 250px;
        text-align: center;
      }
      p {
        line-height: 1.7em;
      }
      img {
        position: relative;
        width: 90%;
      }
  }
`
export const StyledList = styled.div`
    display: flex;
    background: #F5F9E7 67%;
    padding: 2em;
    max-width: 100%;
    justify-content: center;

    @media(max-width: 657px) {
      flex-direction: column;
      align-items: center;
    }
`

export const StyledContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    font-weight: 900;
    font-family: "Manrope", sans-serif;

    .heading {
      text-align: center;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 2rem;
      font-weight: bold;
    }
    
`
export const StyledTitle = styled.div`
    display: flex;
    font-size: 0.7em;
    justify-content:center;
    margin-bottom: -3em;

    @media(max-width: 657px) {
      margin-bottom: -4em;
    }
`

export const StyledHeading = styled.div`
    background: ${props => props.color? 'green': 'white'};
    color: ${props => props.color? 'white': 'black'};
    width: 15%;
    padding: 1.5em;
    text-align: center;
    justify-content:center;

    @media(max-width: 657px) {
      padding: 3em;
    }
`