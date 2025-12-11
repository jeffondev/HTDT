import React from "react";
import logoImage from "../assets/images/HTDT_logo.png";

const Navbar = ({ currentPage, onNavClick }) => {
  const navItems = [
    { id: "about", label: "About US" },
    { id: "pricing", label: "이용 요금" },
    { id: "reservation", label: "예약 및 스토어" },
    { id: "guide", label: "이용 안내" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logoImage} alt="Herbtime Dogtime" className="logo-image" />
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${
                currentPage === 0 && item.id === "about" ? "active" : ""
              } ${currentPage === 1 && item.id === "pricing" ? "active" : ""} ${
                currentPage === 2 && item.id === "reservation" ? "active" : ""
              } ${currentPage === 3 && item.id === "guide" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        {/* 로그인 회원가입 버튼 */}
        <span style={{ visibility: "hidden" }}>
          <div className="nav-auth">
            <a href="#login" className="nav-link">
              로그인
            </a>
            <span className="divider">|</span>
            <a href="#signup" className="nav-link">
              회원가입
            </a>
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
