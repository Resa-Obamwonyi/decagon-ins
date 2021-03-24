import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  font-size: 16px;
  line-height: 24px;
  color: #171825;
  text-align: justify;

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: center;
  }
  p {
    font-weight: normal;
    font-size: 1em;
    line-height: 1.8em;
    margin-bottom: 1.5em;
  }
  li {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    padding: 0.8em 0.8em;
  }

  ul {
    padding: 0.8em;

  }

  @media(max-width: 675px) {
    width: 100%;
    text-align: justify;
  }
  
`