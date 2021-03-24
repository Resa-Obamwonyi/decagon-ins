  import styled from 'styled-components';


export const StyledItem = styled.div`
  .highlight-item {
    display: flex;
    padding: 1em;
    background: white;
    width: 592px;
    height: 80%;
    margin: 2em;
    justify-items: center;
  }
  p {
    font-size: 18px;
    line-height: 32px;
    text-align: justify;
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
    width: 20%;
  }
  .description {
    width: 80%;
    margin: 2em;
  }
  .identity {
    display: flex;
    font-size: 16px;
    line-height: 24px;
  }
  .identity-item {
    margin-right: 0.5em;
  }
  @media (max-width: 990px) {
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
      font-size: 48px;
      line-height: 59px;
      margin-bottom: 2rem;
      font-weight: bold;
    }
    
`
export const StyledTitle = styled.div`
    display: flex;
    justify-content:center;
    margin-bottom: -3em;
    text-align: center;
    align-items: center;
    justify-content:center;
    @media(max-width: 657px) {
      margin-bottom: -4em;
      /* width: 40%; */
    }
`

export const StyledHeading = styled.div`
    background: ${props => props.color? 'green': 'white'};
    color: ${props => props.color? 'white': 'black'};
    width: 25%;
    height: 128px;
    text-align: center;
    justify-content:center;
    font-size: 18px;
    line-height: 48px;
    cursor: pointer;

    @media(max-width: 657px) {
      padding: 3em;
    }
`