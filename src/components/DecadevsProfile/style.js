import styled from 'styled-components';


export const StyledItem = styled.div`
  img {
    width: 80px;
    margin-left: -1em;
  }
  .logo {

  }
  @media(max-width: 675px) {
    img {
      width: 50px;
    }
  }

`
export const StyledList = styled.div`
    .list {
      display: flex;
    }
    @media(max-width: 675px) {
      .list {
        margin-left: 2em;
      }
    }
`

export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 4em;
  background: #171825;
  font-weight: 900;
  font-family: "Manrope", sans-serif;

  .elements {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6em;
  }

  .elements-items {
    display: flex;
    align-items: center;  
  }

  h1 {
    margin-left: 2em;
    color: #FFFFFF;
    font-size: 1.5em;
  }
  p {
    margin-left: 2em;
    color: #FFFFFF;
  }
  @media(max-width: 675px) {
    h1 {
      margin-left: 0.4em;
    }
    p {
      margin-left: 0.4em;
      margin-right: 2em;
      text-align: center;
    }
} 
`
