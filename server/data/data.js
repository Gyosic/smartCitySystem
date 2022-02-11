const datas = {
  chart: {
    data1: [
      { value: 76, name: "A 등급" },
      { value: 67, name: "B 등급" },
      { value: 54, name: "C 등급" },
      { value: 26, name: "D 등급" },
      { value: 18, name: "E 등급" },
    ],

    data2: [
      { value: 134, name: "정상" },
      { value: 32, name: "보통" },
      { value: 15, name: "주의" },
      { value: 2, name: "위험" },
      { value: 1, name: "고독사예지" },
    ],

    data3: [
      { value: 134, name: "등원" },
      { value: 15, name: "미등원" },
      { value: 136, name: "등원승차" },
      { value: 14, name: "미등원승차" },
      { value: 131, name: "하원" },
      { value: 18, name: "미하원" },
      { value: 143, name: "하원승차" },
      { value: 15, name: "미하원승차" },
    ],
  },
  position: [
    { tag: "위도", num: "37.49999581324621" },
    { tag: "경도", num: "126.86281102222206" },
    { tag: "고도(m)", num: 2.6 },
  ],

  status: [
    {
      name: "위험시설물 예경보 알림 서비스",
      target: { setup: 320, alert: 3, event: 5 },
      terminal: { setup: 632, alert: 8, event: 12 },
    },
    {
      name: "교차로 알림 서비스",
      target: { setup: 320, alert: 3, event: 5 },
      terminal: { setup: 632, alert: 8, event: 12 },
    },
    {
      name: "우회전 알리미 서비스",
      target: { setup: 320, alert: 3, event: 5 },
      terminal: { setup: 632, alert: 8, event: 12 },
    },
  ],
};

module.exports = datas;
