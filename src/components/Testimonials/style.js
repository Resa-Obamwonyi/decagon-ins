import styled from 'styled-components';


export const StyledItem = styled.div`

  .highlight-item {
    display: flex;
    padding: 1em;
    background: white;
    max-width: 100%;
    margin: 2em;
  }

  p {
    font-size: 0.9em;
    line-height: 2em;
    text-align: justify;
  }
  img {
    width: 80%;
    margin: 0.5em;
  }
  .logo {
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

  @media (max-width: 657px) {
      .highlight-item {
        flex-direction: column;
        margin: 2em;
        min-height: 250px;
        text-align: center;
      }
      p {
        line-height: 1.7em;
      }
      img {
        width: 20%;
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