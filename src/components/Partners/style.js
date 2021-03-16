import styled from 'styled-components';


export const StyledItem = styled.div`
  
`
export const StyledList = styled.div`
    padding: 2rem;
    max-width: 100%;
    .list {
      display: flex;
    }
`

export const StyledContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    .elements-items {
      text-align: center;
    }
    
    p {
      font-size: 0.9em;
      line-height: 2em;
      text-align: center;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2em;
    }

    @media(max-width: 675px) {
      h1 {
        font-size: 1.5em;
      }
      p {
        font-size: 0.8em;
      }
    }
`
