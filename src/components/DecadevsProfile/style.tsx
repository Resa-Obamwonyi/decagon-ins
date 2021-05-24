import styled from 'styled-components';


export const StyledItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    border: 2px solid white;
    /* margin-left: -1em; */
  }
  .logo {
    height: 56px;
    width: 56px;
    padding-right: 15px;
    margin-right: -2em;
  }
  @media(max-width: 675px) {
    img {
      height: 50px;
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
    font-size: 18px;
    line-height: 24px;
  }
  @media(max-width: 675px) {
    h1 {
      /* margin-left: 0.4em; */
      margin-left: 1em;
    }
    p {
      margin-left: 0.4em;
      margin-right: 2em;
      text-align: center;
    }
} 
`
