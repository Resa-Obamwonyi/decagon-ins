import styled from 'styled-components';


export const StyledItem = styled.div`
    .logo {
      width: 170px;
      height: 96px;
      /* display: inline;
      margin-left: auto;
      margin-right: auto; */
    }
    img {
      max-width: 100%;
    }

`
export const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  line-height: 2em;

  p {
    margin-top: 2em;
  }
  @media(max-width: 657px) {
    p {
      text-align: justify;
    }
  }
`

export const StyledList = styled.div`
  .list{
    display: flex;
    flex-direction: column;
    align-items: center;  
    text-align: center;
    padding: 2em;
    max-width: 100%;
    justify-content: center;
    
  }
  .list-items {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column-reverse; */
    justify-items: center;
    align-items: center;
  }
    

  @media(max-width: 657px) {
    flex-direction: column;
      align-items: center;
    }
`