import React from "react";
import backgroundImage from "../assets/images/dogtime.png";

const NoticePage = React.forwardRef((props, ref) => {
  return (
    <section id="notice" ref={ref} className="page notice-page">
      <div
        className="notice-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
      <div className="notice-container">
        <h2 className="notice-title">이용 주의사항</h2>

        <div className="notice-content">
          <div className="notice-item-card">
            <div className="notice-item-number">1</div>
            <p className="notice-text">10kg 이하 입장 가능합니다.</p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">2</div>
            <p className="notice-text">사람 아이는 13세부터 입장 가능합니다.</p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">3</div>
            <p className="notice-text">
              예민하거나 공격성이 강한 아이는 보호자께서 잘 케어해주시길
              바랍니다.
            </p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">4</div>
            <p className="notice-text">
              타인의 아이를 보호자 허락 없이 만지지 말아주세요.
            </p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">5</div>
            <p className="notice-text">배변은 보호자께서 처리해 주세요.</p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">6</div>
            <p className="notice-text">바닥에 간식을 뿌리지 마세요.</p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">7</div>
            <p className="notice-text">
              마운팅하는 친구들 꼭 자제 부탁 드려요.
            </p>
          </div>

          <div className="notice-item-card">
            <div className="notice-item-number">8</div>
            <p className="notice-text">꽃도장 여아 출입불가합니다.</p>
          </div>
        </div>

        <div className="notice-footer">
          <p className="notice-footer-text">
            위 안내사항을 잘 지켜주시길 부탁드리며 아이들간의 다툼은 업체에서
            책임지지 않습니다.
          </p>
        </div>
      </div>
    </section>
  );
});

NoticePage.displayName = "NoticePage";

export default NoticePage;
