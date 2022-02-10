import styled from "styled-components";
import building from "../assets/building.png";
import cross from "../assets/cross.png";
import right from "../assets/right.png";
import old from "../assets/old.png";
import child from "../assets/child.png";
import specialschool from "../assets/specialschool.png";
import smart from "../assets/smart.png";
import play from "../assets/play.png";
import clock from "../assets/clock.png";

const ServiceSelectorContainer = styled.div`
  position: absolute;
  width: 650px;
  height: 186px;
  left: calc(50% - 325px);
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.45);
  border-radius: 5px 5px 0px 0px;
  display: grid;
  grid-template-rows: repeat(3, 40px);
  grid-template-columns: repeat(3, 230px);
  gap: 20px;
  padding: 15px;

  .service_list {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 40px;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;

    &:nth-child(4) {
      margin-left: -50px;
    }
    &:nth-child(7) {
      margin-left: -50px;
    }

    img {
      margin-right: 10px;
    }
  }
`;

const Select = styled.div`
  position: absolute;
  width: 177px;
  height: 40px;
  bottom: 190px;
  left: calc(50% - 88.5px);
  background: #ffffff;
  border: 1px solid #c1c7cd;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 4px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    height: 18px;
    font-size: 16px;
    line-height: 19px;
    color: #4d5358;
    margin: 0px 10px;
  }
`;

const Close = styled.div`
  position: absolute;
  left: calc(50% + 315px);
  bottom: 176px;
  width: 20px;
  height: 20px;
  border: 2px solid #878d96;
  background: #ffffff;
  border-radius: 50%;
  font-size: 19px;
  color: #878d96;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
`;

const PlayTime = styled.div`
  position: absolute;
  width: 243px;
  height: 55px;
  left: calc(50% + 70px);
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f2f4f8;
  border: 1px solid #c1c7cd;
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  line-height: 16px;

  input {
    background: #ffffff;
    width: 48px;
    height: 32px;
    border: 1px solid #c1c7cd;
    text-align: center;
    border-radius: 3px;
  }

  div {
    background: #ffffff;
    border: 1px solid #a2a9b0;
    width: 48px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a2a9b0;
  }

  span {
    color: #4d5358;
  }
`;

function ServiceSelector() {
  const serviceList = [
    { icon: building, service: "위험시설물 예·경보 알림 서비스" },
    { icon: cross, service: "교차로 알리미 서비스" },
    { icon: right, service: "우회전 알리미 서비스" },
    { icon: old, service: "홀몸어르신 안심 서비스" },
    { icon: child, service: "어린이집 알림 서비스" },
    { icon: specialschool, service: "특수학교 알림 서비스" },
    { icon: smart, service: "스마트 보안등 서비스" },
  ];
  return (
    <ServiceSelectorContainer>
      <Select>
        <img src={play} alt="play" />
        <span>도시 서비스 선택</span>
      </Select>
      {serviceList.map((el, idx) => (
        <div key={idx} className="service_list">
          <img src={el.icon} alt="service_icon" />
          <span>{el.service}</span>
        </div>
      ))}
      <Close>
        <span>&times;</span>
      </Close>
      <PlayTime>
        <img src={clock} alt="clock" width="24.75" height="24.75" />
        <span>재생시간</span>
        <input type="number" />
        <span>분</span>
        <div>저장</div>
      </PlayTime>
    </ServiceSelectorContainer>
  );
}

export default ServiceSelector;
