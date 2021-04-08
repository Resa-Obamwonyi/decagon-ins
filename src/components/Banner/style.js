import styled from 'styled-components';


export const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80vh;
  margin-top: 100px;
  margin-bottom: 20px;
.background-container {
  background-size: cover;
  z-index: 100;
  height: 100%;
  width: 85%;
  display: flex;
  align-items: center;
}
.left {
  width: 40%;
  height: 60%;
  background: #171825;
  z-index: 1000;
  padding: 2rem;
  display: flex;
  margin-left: -10%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.left h1 {
  font-size: 48px;
  line-height: 64px;
  color: #b8d343;
}
.left p {
  font-size: 16px;
  line-height: 29px;
  color: #ffffff;
}
.left button {
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
  color: #ffffff;
  cursor: pointer;
}
@media (max-width: 1090px) {
  .background-container {
    width: 100%;
    justify-content: center;
  }
  .left {
    margin-left: 0;
    justify-content: center;
    width: 70%;
    height: 80%;
    padding-bottom: 2em;
    align-items: center;
  }
  .left h1 {
    font-size: 35px;
    line-height: 44px;
  }
}
@media (max-width: 516px) {
  .left {
    width: 80%;
  }
  .left h1 {
    font-size: 30px;
    line-height: 40px;
  }
}
@media (max-width: 480px) {
  .left {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  .left h1 {
    font-size: 28px;
    line-height: 30px;
  }
}
`;



// import styled from 'styled-components';


// export const StyledDiv = styled.div`
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   height: 80vh;
//   margin-top: 100px;
//   margin-bottom: 20px;

// .background-container {
//   background-size: cover;
//   z-index: 100;
//   height: 100%;
//   width: 85%;
//   display: flex;
//   align-items: center;
// }

// .left {
//   max-height: 448px;
//   max-width: 625px;
//   align-items: center;
//   justify-content: center;

//   /* width: 40%; */
//   /* height: 60%; */
//   /* background: #171825;
//   z-index: 1000;
//   padding: 2rem;
//   display: flex;
//   margin-left: -10%;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between; */
// }

// .content {
//   width: 100%;
//   /* max-width: 625px; */
//   height: 100%;
//   /* max-height: 448px; */
//   background: #171825;
//   z-index: 1000;
//   padding: 2rem;
//   display: flex;
//   margin-left: -20%;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
// }

// .left h1 {
//   font-size: 48px;
//   line-height: 64px;
//   color: #b8d343;
// }

// .left p {
//   font-size: 16px;
//   line-height: 29px;
//   color: #ffffff;
// }

// .left button {
//   outline: none;
//   border: none;
//   justify-content: center;
//   align-items: center;
//   padding: 16px 24px;
//   background: linear-gradient(96.67deg, #34a853 0%, #b8d344 100%);
//   color: #ffffff;
//   cursor: pointer;
// }


// @media (max-width: 1090px) {
//   .background-container {
//     width: 100%;
//     justify-content: center;
//   }
//   .left {
//     /* margin-left: 0; */
//     justify-content: center;
//     /* width: 70%;
//     height: 80%;
//     padding-bottom: 2em; */
//     align-items: center;
//   }
//   .content {
//     margin-left: 0;
//     justify-content: center;
//     align-items: center;

//     width: 70%;
//     height: 80%;
//     padding-bottom: 2em;
//     align-items: center;
//   }
//   .left h1 {
//     font-size: 35px;
//     line-height: 44px;
//   }
// }

// @media (max-width: 516px) {
//   /* .left {
//     width: 80%;
//   } */
//   .content {
//     width: 80%;
//   }
//   .left h1 {
//     font-size: 30px;
//     line-height: 40px;
//   }
// }

// @media (max-width: 480px) {
//   /* .left {
//     background: rgba(0, 0, 0, 0.7);
//     width: 100%;
//     height: 100%;
//   } */
//   .content {
//     background: rgba(0, 0, 0, 0.7);
//     width: 100%;
//     height: 100%;
//   }
//   .left h1 {
//     font-size: 28px;
//     line-height: 30px;
//   }
// }
// `;