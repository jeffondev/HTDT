import React, { useEffect, useRef } from "react";
import phoneIcon from "../assets/images/Phone.png";
import clockIcon from "../assets/images/Clock.png";
import mapIcon from "../assets/images/Map.png";

const GuidePage = React.forwardRef((props, ref) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // 환경 변수에서 API 키 가져오기
    const KAKAO_MAP_API_KEY =
      process.env.REACT_APP_KAKAO_MAP_API_KEY ||
      process.env.KAKAO_MAP_API_KEY ||
      "";

    if (!KAKAO_MAP_API_KEY) {
      console.error("카카오 맵 API 키가 설정되지 않았습니다.");
      return;
    }

    let mapInstance = null;
    let retryCount = 0;
    const MAX_RETRIES = 20;

    // 카카오 맵 초기화 함수
    const initMap = () => {
      const container = document.getElementById("kakao-map");
      if (!container) {
        console.error("지도 컨테이너를 찾을 수 없습니다");
        return false;
      }

      // 컨테이너 크기 확인
      if (container.offsetWidth === 0 || container.offsetHeight === 0) {
        console.warn("지도 컨테이너 크기가 0입니다");
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
        mapInstance = new window.kakao.maps.Map(container, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(
          37.35498547201883,
          126.82779453325496
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(mapInstance);

        mapRef.current = mapInstance;
        console.log("카카오 맵 초기화 성공");
        return true;
      } catch (error) {
        console.error("지도 초기화 중 오류:", error);
        return false;
      }
    };

    // 카카오 맵 API 초기화
    const initializeKakaoMap = () => {
      if (retryCount >= MAX_RETRIES) {
        console.error("카카오 맵 API 로드 실패: 최대 재시도 횟수 초과");
        return;
      }

      // API가 완전히 로드되었는지 확인
      if (
        window.kakao &&
        window.kakao.maps &&
        typeof window.kakao.maps.LatLng === "function" &&
        typeof window.kakao.maps.Map === "function" &&
        typeof window.kakao.maps.Marker === "function"
      ) {
        // 약간의 지연 후 초기화 (DOM이 완전히 준비되도록)
        setTimeout(() => {
          if (!initMap()) {
            retryCount++;
            if (retryCount < MAX_RETRIES) {
              setTimeout(initializeKakaoMap, 500);
            }
          }
        }, 200);
      } else {
        retryCount++;
        setTimeout(initializeKakaoMap, 300);
      }
    };

    // 카카오 맵 스크립트 로드
    const loadKakaoMapScript = () => {
      // 이미 로드되어 있는지 확인
      if (window.kakao && window.kakao.maps) {
        initializeKakaoMap();
        return;
      }

      // 스크립트가 이미 추가되어 있는지 확인
      const existingScript = document.querySelector(
        'script[src*="dapi.kakao.com/v2/maps/sdk.js"]'
      );
      if (existingScript) {
        if (existingScript.getAttribute("data-loaded") === "true") {
          initializeKakaoMap();
        } else {
          existingScript.addEventListener("load", () => {
            existingScript.setAttribute("data-loaded", "true");
            setTimeout(initializeKakaoMap, 500);
          });
        }
        return;
      }

      // 스크립트 동적 추가
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&autoload=false`;
      script.async = true;
      script.onload = () => {
        script.setAttribute("data-loaded", "true");
        // autoload=false이므로 수동으로 로드
        if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
          window.kakao.maps.load(() => {
            setTimeout(initializeKakaoMap, 500);
          });
        } else {
          setTimeout(initializeKakaoMap, 500);
        }
      };
      script.onerror = () => {
        console.error("카카오 맵 API 스크립트 로드 실패");
      };
      document.head.appendChild(script);
    };

    // 스크립트 로드 시작
    loadKakaoMapScript();

    // 클린업 함수
    return () => {
      if (mapInstance) {
        mapInstance = null;
      }
    };
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
