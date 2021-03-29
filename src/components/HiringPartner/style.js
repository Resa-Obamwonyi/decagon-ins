import styled from 'styled-components';


export const StyledItem = styled.div`
    .logo {
      width: 170px;
      height: 96px;
    }
    img {
      max-width: 100%;
    }

`
export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  line-height: 2em;
  h1 {
    font-size: 32px;
    line-height: 44px;
  }

  p {
    margin-top: 2em;
  }
  @media(max-width: 657px) {
    p {
      text-align: justify;
      font-size: 16px;
      line-height: 32px;
    }
  }
`

export const StyledList = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap:wrap;
  justify-content: center;

  @media(max-width: 657px) {
    flex-direction: column;
    align-items: center; 
    }
`