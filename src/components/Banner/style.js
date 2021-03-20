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
    font-size: 2em;
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
    margin-left: 80px;
    position: relative;
    font-family: "Manrope", sans-serif;
    top: 90px;
    z-index: 1000;
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

  @media (max-width : 990px) {
    height: 350px;

    .OverlayContent {
      display: flex;
      justify-content: center;
      align-item: center;
    }
    .background-image {
      margin-top: 10px;
    }
    .banner-content {
      position: absolute;
      width: 65%;
      height: 200px;
      top: 130px;
      padding: 0;
      opacity: 0.8;
      margin: 0;
      padding: 1.83em;
      display: flex;
      flex-direction: column;
      margin-left: 2em;
      padding-bottom: 3em;
    }
    p {
      color: #FFFFFF;
      width: 100%;
      font-size: 1em;
      line-height: 1.5em;
      margin: 0;
      margin-bottom: 1em;
      font-weight: 600;
      text-align: justify;
    }
    button {
      padding: 1em 0.5em;
      font-size: 0.9em;
      font-weight: 500;
      text-align: center;
      
    }
    h2 {
      color: #B8D343;
      font-size: 1.5em;
      font-weight: 800;
      margin-top: 0;
    }
    .gradient-image {
      max-width: 40%;
      position: absolute;
      // position: relative;
      bottom: 2000px;
      left: 10px;
      top: 400px;
    }
  }
`;