import React from "react";
import backgroundImage from "../assets/images/greenhouse-background.png";
import naver_logo from "../assets/images/naver.png";
import instagram_logo from "../assets/images/Instagram.png";

const AboutPage = React.forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="page about-page">
      <div className="about-content">
        <div className="about-text">
          <h1 className="about-title">ABOUT US</h1>
          <p className="about-description">
            서울 근교에 위치한 반려견과 함께하는 힐링 카페
            <br />
            사계절의 향기를 느낄 수 있는 공간에서 행복을 나눠보세요.
            <br />
            자연의 품에서 반려견과 함께 쌓는 추억의 시간
            <br />
            <span className="highlight">허브타임 독타임 입니다.</span>
          </p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/herb_dog_time/"
              className="social-icon-link"
            >
              <img
                src={instagram_logo}
                alt="instagram_logo"
                className="social-icon-image"
              />
            </a>
            <a
              href="https://m.place.naver.com/place/1267154409/home?entry=ple&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn_1R8gDMxRAtVgCNGNEc06sHXutu6EakIMRifHrukn55FKzkO5DYpa3wF7GY_aem_g6NFViWygf_dM2SoU25zFA"
              className="social-icon-link"
            >
              <img
                src={naver_logo}
                alt="naver_logo"
                className="social-icon-image"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className="about-background"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>
    </section>
  );
});

AboutPage.displayName = "AboutPage";

export default AboutPage;
