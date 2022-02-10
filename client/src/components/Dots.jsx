import styled from "styled-components";

const DotsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  div {
    width: 10px;
    height: 10px;
    background: lightgrey;
    border-radius: 50%;
    margin: 3px;

    &:nth-child(1) {
      background: #027fc2;
      width: 15px;
      height: 15px;
    }
  }
`;

function Dots() {
  return (
    <DotsContainer>
      <div />
      <div />
      <div />
    </DotsContainer>
  );
}

export default Dots;
