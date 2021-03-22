import styled from "styled-components";

export const StackCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #ffffff;
  flex-basis: 30%;
  height: 180px;
  margin: 20px 3% 20px 0px;
  h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 13px;
    color: #171825;
  }

  p {
    font-size: 16px;
    line-height: 5px;
    color: #34a853;
    :hover{
      cursor: pointer;
    }
  }

  .img {
    flex-basis: 60%;
    ${'' /* margin: 25px 25%; */}
    max-height: 50%;
    img {
        padding-top: 25px;
      width: 30%;
    }
  }

  .content {
    flex-basis: 40%;
  }
`;