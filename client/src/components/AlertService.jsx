import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const AlertServiceContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 20px;
  width: 335px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 3px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #349fda;
  position: relative;

  .close_btn {
    width: 26px;
    height: 26px;
    background: #ffffff;
    border-radius: 50%;
    border: 2px solid #349fda;
    position: absolute;
    top: -8px;
    right: -10px;
    color: #349fda;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
  }

  .bar {
    width: 5px;
    height: 44px;
    background: #027fc2;
    margin: 0 10px 0 10px;
  }
  strong {
    font-size: 18px;
    line-height: 21px;
    color: #343a3f;
  }

  span {
    font-size: 13px;
    line-height: 15px;
    color: #4d5358;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  width: 100%;
  height: fit-content;

  .box {
    width: 280px;
    background: #ffffff;
    border: 1px solid #dde1e6;
    border-bottom: none;
    display: flex;
    align-items: center;
    height: 28px;
    padding-left: 15px;
    &:nth-child(5) {
      border-bottom: 1px solid #dde1e6;
    }

    span {
      color: #697077;
      font-size: 13px;
    }

    span:nth-child(1) {
      width: 120px;
    }
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #027fc2;
    margin-right: 5px;
  }

  span {
    font-size: 14px;
    line-height: 16px;
    color: #4d5358;
  }

  .place {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 5px;
    position: relative;
    color: #343a3f;

    .tag {
      height: 22px;
      width: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      border: 1px solid #c1c7cd;
      border-radius: 10.5px;
      background: #ffffff;
      z-index: 10;
    }

    .line {
      position: absolute;
      left: 0;
      height: 0;
      width: 125px;
      border-bottom: 1px solid #c1c7cd;
    }

    .num {
      height: 22px;
      width: 158px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      border: 1px solid #c1c7cd;
      border-radius: 10.5px;
      background: #f2f4f8;
      z-index: 10;
      margin-left: 60px;
    }

    &.place:nth-child(4) {
      .num {
        width: 57px;
        margin-left: 40px;
      }
      .tag {
        width: 68px;
      }
    }
  }
`;

const PageBar = styled.div`
  display: flex;
  width: 100%;
  height: 29px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  div {
    width: 20px;
    height: 3px;
    background: #dde1e6;
    border-radius: 1.5px;
    margin: 0px 2px;
    &:nth-child(1) {
      background: #349fda;
    }
  }
`;

const Alert = styled.div`
  width: 100%;
  height: 110px;
  background: #ebf5fb;
  border-radius: 0px 0px 3px 3px;
  padding: 18px;
  position: relative;
  border-top: 1px solid #9acfed;

  h4 {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: normal;
    line-height: 19px;
    color: #027fc2;
    opacity: 1;
  }
  p {
    font-size: 13px;
    line-height: 18px;
    color: #027fc2;
  }
  span {
    position: absolute;
    top: 6px;
    right: 6px;
    color: #027fc2;
    font-size: 13px;
  }
`;

function AlertService() {
  const [position, setPosition] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVER_URL)
      .then((res) => setPosition(res.data.dataList.position));
  });

  return (
    <AlertServiceContainer>
      <Header>
        <div className="bar" />
        <div>
          <strong>고척중학교 교차로</strong>
          <br />
          <span>서울특별시 구로구 고척동 76-224</span>
        </div>
        <div className="close_btn">&times;</div>
      </Header>
      <Section>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <div className="dot" />
          <span>설치위치</span>
        </div>
        {position.map((el, idx) => (
          <div className="place" key={idx}>
            <div className="tag">{el.tag}</div>
            <div className="line"></div>
            <div className="num">{el.num}</div>
          </div>
        ))}
      </Section>
      <Section>
        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <div className="dot" />
          <span>디바이스 상태</span>
        </div>
        <div className="box">
          <span>단말 명칭</span>
          <span>OOO정보통신</span>
        </div>
        <div className="box">
          <span>설치일</span>
          <span>2018.11.25</span>
        </div>
        <div className="box">
          <span>단말 운영상태</span>
          <span>정상</span>
        </div>
        <div className="box">
          <span>단말 통신상태</span>
          <span>정상</span>
        </div>
      </Section>
      <PageBar>
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} />
          ))}
      </PageBar>
      <Alert>
        <h4>교차로 알리미 서비스</h4>
        <p>
          &nbsp; 어린이 보호 구역과 교차로 지역에 진입하는 차량 속도를 AI/IoT
          기술을 활용하여 보행자 및 운전자 동시에 알려주는 사고예방 안전서비스
          입니다.
        </p>
        <span>&times;</span>
      </Alert>
    </AlertServiceContainer>
  );
}

export default AlertService;
