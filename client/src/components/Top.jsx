import styled from "styled-components";
import logo from "../assets/GURO_LOGO.png";

const TopContainer = styled.div`
  width: 100%;
  min-width: 1080px;
  height: 80px;
  padding: 20px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.9375px;
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;
const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 400px;

  li {
    line-height: 21px;
    color: #697077;

    &:nth-child(3) {
      color: #343a3f;
      border-bottom: 2px solid #045b8a;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
`;

function Top() {
  return (
    <TopContainer>
      <Title>
        <img src={logo} alt="logo" />
        <span>스마트 도시 사업관리 시스템</span>
      </Title>
      <Menu>
        <li>대시보드</li>
        <li>서비스</li>
        <li>수정데이터</li>
        <li>이벤트</li>
        <li>시스템관리</li>
      </Menu>
      <User>
        <div>
          <span style={{ fontSize: "12px", color: "#697077" }}>
            IP: 256.23.123.89
          </span>
          <br />
          <span style={{ fontSize: "16px", color: "#027fc2" }}>관리자 </span>
          <span
            style={{ fontSize: "16px", color: "#027fc2", fontWeight: "550" }}
          >
            홍길동
          </span>
        </div>
        <span style={{ fontSize: "14px", color: "#697077" }}>로그아웃</span>
      </User>
    </TopContainer>
  );
}

export default Top;
