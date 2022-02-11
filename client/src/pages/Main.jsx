import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Top from "../components/Top";
import Situation from "../components/Situation";
import ServiceSelector from "../components/ServiceSelector";
import AlertService from "../components/AlertService";
import OperationStatus from "../components/OperationStatus";
import TimeService from "../components/TimeService";
import axios from "axios";

const MainContainer = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
`;

const Map = styled.div`
  width: 100%;
  height: calc(100% - 80px);
`;

const { naver } = window;

function Main() {
  const [curPosition, setCurPosition] = useState([
    37.49999581324621, 126.86281102222206,
  ]);
  const mapRef = useRef(null);

  const mapOptions = {
    center: new naver.maps.LatLng(...curPosition),
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.TOP_CENTER,
    },
  };

  useEffect(() => {
    const map = new naver.maps.Map(mapRef.current, mapOptions);

    const currentMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(...curPosition),
      map,
    });

    new naver.maps.InfoWindow(currentMarker);
  }, [curPosition]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api`)
      .then((res) => console.log(res.data));
  }, []);

  return (
    <MainContainer>
      <Top />
      <Map ref={mapRef}></Map>
      <Situation />
      <ServiceSelector />
      <AlertService />
      <OperationStatus />
      <TimeService />
    </MainContainer>
  );
}

export default Main;
