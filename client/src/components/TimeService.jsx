import styled from "styled-components";
import Clock from "react-live-clock";
import weather from "../assets/weather.png";
import t from "../assets/t.png";

const TimeServiceContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 375px;
  width: 524px;
  height: 56px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.35);
  border-radius: 3px;
`;

const Time = styled.div`
  span {
    font-size: 14px;
    line-height: 16px;
    color: #697077;
  }
  .time {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #4d5358;
  }
  .date {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #4d5358;
    padding-left: 15px;
    position: relative;
    bottom: 5px;
  }
`;

const Bar = styled.div`
  width: 0px;
  height: 40px;
  border-left: 1px solid #c1c7cd;
  margin: 0px 20px;
`;

const Weather = styled.div`
  width: 120px;
  span {
    font-size: 14px;
    line-height: 16px;
    color: #697077;
  }
  .temp {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #4d5358;
  }
  .temp_sign {
    font-size: 16px;
    line-height: 19px;
    color: #4d5358;
  }
  img {
    position: relative;
    left: 30px;
    bottom: 8px;
  }
`;

const PM = styled.div`
  width: 80px;
  span {
    font-size: 14px;
    line-height: 16px;
    color: #697077;
  }
  .density {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #4d5358;
  }
  .status {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #4d5358;
    font-style: normal;
    position: relative;
    left: 10px;
    bottom: 2px;
  }
`;

function TimeService() {
  return (
    <TimeServiceContainer>
      <Time>
        <span>현재시간</span>
        <br />
        <Clock
          format={"HH:mm:ss"}
          ticking={true}
          timezone={"Japan"}
          className="time"
        />
        <Clock format={"YYYY.MM.DD"} timezone={"Japan"} className="date" />
      </Time>
      <Bar />
      <Weather>
        <span>날씨</span>
        <br />
        <span className="temp">21&nbsp;</span>
        <span className="temp_sign">℃</span>
        <img src={weather} />
      </Weather>
      <Bar />
      <PM>
        <span>PM2.5</span>
        <br />
        <span className="density">27</span>
        <span className="status">좋음</span>
      </PM>
      <Bar />
      <img src={t} alt="t" />
    </TimeServiceContainer>
  );
}

export default TimeService;
