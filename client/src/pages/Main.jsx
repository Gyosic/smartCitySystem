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
  const [ipClient, setIpClient] = useState("");
  const [location, setLocation] = useState({
    lat: "37.49999581324621",
    lon: "126.86281102222206",
  });
  const mapRef = useRef(null);

  const mapOptions = {
    center: new naver.maps.LatLng(location.lat, location.lon),
    zoom: 15,
    zoomControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.TOP_CENTER,
    },
  };

  const getIpClient = () => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((res) => {
        setIpClient(res.data.ip);
        // axios
        //   .get(
        //     `https://ipinfo.io/${res.data.ip}?token=${process.env.REACT_APP_IP_CLIENT_TOKEN}`
        //   )
        //   .then((res) => {
        //     const position = res.data.loc.split(",");
        //     const [lat, lon] = [position[0], position[1]];
        //     setLocation({ lat, lon });
        //   });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const map = new naver.maps.Map(mapRef.current, mapOptions);

    const currentMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(location.lat, location.lon),
      map,
    });

    new naver.maps.InfoWindow(currentMarker);
  }, [location]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api`)
      .then((res) => console.log("get /api", res.data))
      .catch((err) => console.log(err));
    getIpClient();
  }, []);

  return (
    <MainContainer>
      <Top ip={ipClient} />
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
