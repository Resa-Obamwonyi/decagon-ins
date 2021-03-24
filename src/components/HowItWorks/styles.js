import styled from 'styled-components'


const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3em;
  padding: 0;
  background: #F5F9E7 67%;
  /* font-weight: 900; */

  h1 {
    font-size: 48px;
    line-height: 64px;
  }

  @media only screen 
  and (max-width : 675px) 
  and (max-width : 790px) {
    margin-bottom: 4em;
    padding-bottom: 1em;
  }

  .heading {
    /* padding: 2em; */
    padding-top: 1em;
    /* padding-bottom: 1em; */
    text-align: center;
  }
`

const StyledItem = styled.div`
  position: relative;
  background: ${props => props.color ? 'white':''};
  padding: 0.5em 0 0.5em 1em;
  margin: 1.5em;
  max-width: 80%;

  h2 {
    font-size: 24px;
line-height: 32px;
  }

  .description {
    font-size: 16px;
    line-height: 26px;
    text-align: justify;
    width: 70%;
  }
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 1em 2.5em 1em; */
  max-width: 100%;

  img {
    max-width: 100%;
    /* max-width: 80%;
    object-fit: cover; */
    /* display: flex; */
    /* justify-self: center;
    align-self: center; */
    
  }
  .text {
    width: 60%;
  }
  .full-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
  }

  @media (max-width: 675px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
    margin: 0;
    padding-top:0;

    .text {
    /* max-width: 90%; */
    }

    .full-image {
      display: flex;
      justify-self: start;
      max-width: 100%;
      margin: 0;

    }
  }
`

export {StyledDiv, StyledContainer, StyledItem}