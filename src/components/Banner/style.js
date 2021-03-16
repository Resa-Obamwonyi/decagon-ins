import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 90%;
  height: 590px;
  margin-bottom: 400em;
  margin: auto 0;
  .OverlayContent {
    width: 100%;
    margin-top: 8em;
  }
  .background-image {
    max-width: 100%;
    position: absolute;
    top: 100px;
    right: 0;
  }
  img {
    width: 100%;
  }
  h2 {
    color: #B8D343;
    font-size: 1.8em;
    font-weight: 800;
  }
  p {
    color: #FFFFFF;
    width: 90%;
    font-size: 1.15em;
    line-height: 1.8em;
    margin: 2em 0;
    font-weight: 600;
  }
  button {
    background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
    color: #FFFFFF;
    padding: 1.5em 0;
    width: 30%;
    outline: none;
    font-size: 1.0em;
    display: flex;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
  }
  .banner-content {
    background: #171825;
    padding: 2em 3em;
    width: 40%;
    // margin-top: 200px;
    margin-left: 80px;
    position: relative;
    font-family: "Manrope", sans-serif;
  }
  .gradient-image {
    max-width: 40%;
    // position: absolute;
    position: relative;
    bottom: 2000px;
    left: 20px;
    top: 0;
    margin-bottom: 2em;
  }

  @media(max-width: 675px) {
    .OverlayContent {
      display: flex;
      justify-content: center;
    }

    .banner-content {
      width: 100%;
      padding: 1em 1.2em;
      opacity: 0.8;
      margin-top: 2.5em;
      padding: 1.83em;
    }
    button {
      padding: 1em 0.5em;
      font-size: 0.9em;
      font-weight: 500;
      text-align: center;
      
    }
    p {
    color: #FFFFFF;
    width: 70%;
    font-size: 0.9em;
    text-align: justify;
    line-height: 2em;
    font-weight: 600;
    line-spacing: 5em;
    }
  }
`;