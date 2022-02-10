import styled from "styled-components";
import Chart from "./Chart";
import Dots from "./Dots";

const SituationContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 20px;
  width: 335px;
  height: 89%;
  background: #ffffff;
  z-index: 10;
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  h3 {
    color: #4d5358;
    font-size: 18px;
    font-weight: normal;
    line-height: 22px;
    border-bottom: 2px solid #027fc2;
  }
`;

const ChartSection = styled.div`
  width: 100%;
  height: 265px;
  border: 1px solid #dde1e6;
  border-radius: 3px;
  margin-top: 20px;
  position: relative;

  h4 {
    position: absolute;
    top: 20px;
    left: 60px;
    font-size: 14px;
    font-weight: normal;
  }

  h5 {
    position: absolute;
    top: 20px;
    left: 80px;
    font-size: 14px;
    font-weight: normal;
  }

  span {
    position: absolute;
    top: 143px;
    left: 67px;
    font-size: 14px;
    text-align: center;
  }

  p {
    position: absolute;
    top: 135px;
    left: 74px;
    font-size: 14px;
    text-align: center;
  }
`;

function Situation() {
  const data1 = [
    { value: 76, name: "A 등급" },
    { value: 67, name: "B 등급" },
    { value: 54, name: "C 등급" },
    { value: 26, name: "D 등급" },
    { value: 18, name: "E 등급" },
  ];

  const data2 = [
    { value: 134, name: "정상" },
    { value: 32, name: "보통" },
    { value: 15, name: "주의" },
    { value: 2, name: "위험" },
    { value: 1, name: "고독사예지" },
  ];

  const data3 = [
    { value: 134, name: "등원" },
    { value: 15, name: "미등원" },
    { value: 136, name: "등원승차" },
    { value: 14, name: "미등원승차" },
    { value: 131, name: "하원" },
    { value: 18, name: "미하원" },
    { value: 143, name: "하원승차" },
    { value: 15, name: "미하원승차" },
  ];

  return (
    <SituationContainer>
      <h3>스마트 도시 서비스 주요 현황</h3>
      <ChartSection>
        <h4>위험시설물 예·경보 알림 서비스</h4>
        <Chart data={data1} />
        <span>시설물등급</span>
      </ChartSection>
      <ChartSection>
        <h5>홀몸어르신 안심 서비스</h5>
        <Chart data={data2} />
        <p>
          어르신 <br />
          위험등급
        </p>
      </ChartSection>
      <ChartSection>
        <h5>어린이집 알림 서비스</h5>
        <Chart data={data3} />
        <p>
          단말상태 <br />
          총149개
        </p>
      </ChartSection>
      <Dots />
    </SituationContainer>
  );
}

export default Situation;
