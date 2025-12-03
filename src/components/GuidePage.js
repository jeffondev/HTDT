import React, { useEffect, useRef } from "react";
import phoneIcon from "../assets/images/Phone.png";
import clockIcon from "../assets/images/Clock.png";
import mapIcon from "../assets/images/Map.png";

const GuidePage = React.forwardRef((props, ref) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 카카오 맵 초기화 함수
    const initMap = () => {
      // 카카오 맵 API가 로드되었는지 확인
      if (!window.kakao || !window.kakao.maps) {
        return false;
      }

      const container = document.getElementById("kakao-map");
      if (!container) {
        return false;
      }

      try {
        // 지도 생성
        const options = {
          center: new window.kakao.maps.LatLng(
            37.35498547201883,
            126.82779453325496
          ),
          level: 4,
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(
          37.35498547201883,
          126.82779453325496
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);

        mapRef.current = map;
        console.log("카카오 맵 초기화 성공");
        return true;
      } catch (error) {
        console.error("지도 초기화 중 오류:", error);
        return false;
      }
    };

    // 카카오 맵 API가 로드될 때까지 대기
    const checkAndInit = () => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
        // kakao.maps.load를 사용하여 API 완전 로드 대기
        window.kakao.maps.load(() => {
          initMap();
        });
      } else if (window.kakao && window.kakao.maps) {
        // load 함수가 없으면 직접 시도
        if (!initMap()) {
          // 실패하면 잠시 후 재시도
          setTimeout(checkAndInit, 300);
        }
      } else {
        // API가 아직 로드되지 않았으면 재시도
        setTimeout(checkAndInit, 300);
      }
    };

    // 초기화 시작
    checkAndInit();
  }, []);

  return (
    <section id="guide" ref={ref} className="page guide-page">
      <div className="guide-container">
        <h2 className="guide-title">이용 안내 & 연락처</h2>

        <div className="guide-content">
          {/* 왼쪽: 정보 박스들 */}
          <div className="guide-info">
            {/* 전화 정보 */}
            <div className="info-box">
              <div className="info-box-header">
                <img src={phoneIcon} alt="전화" className="info-icon" />
                <h3 className="info-box-title">전화</h3>
              </div>
              <p className="info-box-content">0507-1339-2313</p>
            </div>

            {/* 영업시간 */}
            <div className="info-box">
              <div className="info-box-header">
                <img src={clockIcon} alt="영업시간" className="info-icon" />
                <h3 className="info-box-title">영업시간</h3>
              </div>
              <div className="info-box-content">
                <p>12:00 to 20:00</p>
                <p>연중 무휴</p>
                <p>월, 화 및 개인 사정 시 무인 운영</p>
              </div>
            </div>

            {/* 주소 */}
            <div className="info-box">
              <div className="info-box-header">
                <img src={mapIcon} alt="주소" className="info-icon" />
                <h3 className="info-box-title">주소</h3>
              </div>
              <div className="info-box-content">
                <p>경기도 안산시 너비울길 94</p>
                <p>경기도 안산시 단원구 화정동 258-1</p>
              </div>
            </div>
          </div>

          {/* 오른쪽: 지도 */}
          <div className="guide-map">
            <div id="kakao-map" className="kakao-map-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

GuidePage.displayName = "GuidePage";

export default GuidePage;
