import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Dots from "./Dots";

const OperationStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 455px;
  position: absolute;
  right: 20px;
  top: 600px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 3px;
  padding: 20px;

  h3 {
    height: 24px;
    font-size: 18px;
    line-height: 21px;
    font-weight: normal;
    color: #4d5358;
    border-bottom: 2px solid #027fc2;
  }
`;

const Legend = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 5px;

  div {
    display: flex;
    margin-left: 10px;
  }

  .setup_bar {
    width: 3px;
    height: 15px;
    background: #1479c9;
    margin: 0px 3px;
  }
  .status_bar {
    width: 3px;
    height: 15px;
    background: #ee6f17;
    margin: 0px 3px;
  }
  .event_bar {
    width: 3px;
    height: 15px;
    background: #8a3ffc;
    margin: 0px 3px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0 5px 0;
  width: 100%;
  height: fit-content;
  position: relative;

  .dash_line {
    position: absolute;
    top: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 0;
    border-top: 1px dashed #c1c7cd;
  }
  .dash_line_4 {
    position: absolute;
    bottom: 0;
    left: -20px;
    width: calc(100% + 40px);
    height: 0;
    border-top: 1px dashed #c1c7cd;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #027fc2;
    margin-right: 5px;
  }

  .target_facility {
    display: flex;
    align-items: center;
    margin-left: 25px;
    height: 30px;
    border-bottom: 1px solid #dde1e6;

    span {
      margin-right: 35px;
      font-size: 13px;
      color: #4d5358;
    }

    strong {
      font-size: 18px;
    }
    .s_first {
      color: #1479c9;
      margin-right: 3px;
    }
    .s_second {
      color: #ee6f17;
      margin-right: 60px;
    }
    .s_third {
      color: #8a3ffc;
    }
  }

  .terminal {
    display: flex;
    align-items: center;
    margin-left: 25px;
    height: 30px;

    span {
      margin-right: 46.5px;
      font-size: 13px;
      color: #4d5358;
    }

    strong {
      font-size: 18px;
    }
    .s_first {
      color: #1479c9;
      margin-right: 3px;
    }
    .s_second {
      color: #ee6f17;
      margin-right: 55px;
    }
    .s_third {
      color: #8a3ffc;
    }
  }
`;

function OperationStatus() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/service`)
      .then((res) => setStatus(res.data.response));
  });

  return (
    <OperationStatusContainer>
      <h3>대상시설 및 단말 운영 현황</h3>
      <Legend>
        <div>
          <div className="setup_bar" />
          <span>설치</span>
        </div>
        <div>
          <div className="status_bar" />
          <span>상태알림</span>
        </div>
        <div>
          <div className="event_bar" />
          <span>이벤트</span>
        </div>
      </Legend>
      {status.map((el, idx) => (
        <Section key={idx}>
          <div className="dash_line" />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div className="dot" />
            <span>{el.name}</span>
          </div>
          <div className="target_facility">
            <span>대상시설</span>
            <strong className="s_first">{el.target.setup}</strong>
            <span>개소</span>
            <strong className="s_second">{el.target.alert}</strong>
            <strong className="s_third">{el.target.event}</strong>
          </div>
          <div className="terminal">
            <span>단말기</span>
            <strong className="s_first">{el.terminal.setup}</strong>
            <span>개</span>
            <strong className="s_second">{el.terminal.alert}</strong>
            <strong className="s_third">{el.terminal.event}</strong>
          </div>
          {idx === 2 ? <div className="dash_line_4" /> : null}
        </Section>
      ))}
      <Dots />
    </OperationStatusContainer>
  );
}

export default OperationStatus;
