import React from "react";
import personIcon from "../assets/images/personicon.png";
import homeicon from "../assets/images/homeicon.png";

const PricingPage = React.forwardRef((props, ref) => {
  return (
    <section id="pricing" ref={ref} className="page pricing-page">
      <div className="pricing-container">
        <h2 className="pricing-title">이용 요금</h2>

        <div className="pricing-cards">
          {/* 일반 입장 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <img src={personIcon} alt="personIcon" className="pricing-icon" />
              <h3 className="pricing-card-title">일반 입장</h3>
            </div>
            <div className="pricing-list">
              <div className="pricing-item">
                <span className="pricing-label">보호자</span>
                <span className="pricing-value">8000원</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">반려견 첫째</span>
                <span className="pricing-value">6000원</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">반려견 둘째부터</span>
                <span className="pricing-value">5000원</span>
              </div>
            </div>
            <div className="pricing-notes">
              <p>• 음료 무료 제공 / 월, 화에는 시판음료 제공</p>
              <p>• 국물 없는 외부음식 반입이 가능합니다.</p>
            </div>
          </div>

          {/* 대관 */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <img src={homeicon} alt="houseIcon" className="pricing-icon" />
              <h3 className="pricing-card-title">대관</h3>
            </div>
            <div className="pricing-list">
              <div className="pricing-item">
                <span className="pricing-label">허브타임 대관</span>
                <span className="pricing-value">50000원/2시간</span>
              </div>
              <div className="pricing-item">
                <span className="pricing-label">독타임 대관</span>
                <span className="pricing-value">100000원/2시간</span>
              </div>
            </div>
            <div className="pricing-notes">
              <p>• 대관은 영업시간 이외에도 가능합니다.</p>
              <p>
                • 독타임 대관은 평일 및 주말 영업시간 이외의 시간에만
                가능합니다.
              </p>
              <p>• 국물 없는 외부음식 반입이 가능합니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

PricingPage.displayName = "PricingPage";

export default PricingPage;
