import React from "react";
import herbtimeImage from "../assets/images/herbtime.png";
import dogtimeImage from "../assets/images/dogtime.png";

const ReservationPage = React.forwardRef((props, ref) => {
  const bookingCards = [
    {
      id: 1,
      title: "허브타임 대관",
      price: "2시간 50000₩",
      image: herbtimeImage,
      buttonText: "예약하기",
      description: [
        "허브타임 대관 전용 공간에서",
        "반려견과 함께 시간을",
        "보낼 수 있습니다.",
      ],
    },
    {
      id: 2,
      title: "독타임 대관",
      price: "2시간 100000₩",
      image: dogtimeImage,
      buttonText: "예약하기",
      description: [
        "독타임 대관 전용 공간에서",
        "반려견과 함께 시간을",
        "보낼 수 있습니다.",
      ],
    },
    {
      id: 3,
      title: "네이버 스토어",
      price: "허브 티백 구매",
      image: dogtimeImage, // 나중에 이미지 추가
      buttonText: "스토어 이동",
      description: [
        "허브타임 독타임 네이버 스토어에서",
        "허브 티백을 구매할 수 있습니다.",
      ],
    },
  ];

  return (
    <section id="reservation" ref={ref} className="page reservation-page">
      <div className="reservation-container">
        <h2 className="reservation-title">예약 및 스토어</h2>
        <p className="reservation-subtitle">
          대관을 통해 프라이빗한 자연 공간을 즐길 수 있습니다.
        </p>

        <div className="booking-cards">
          {bookingCards.map((card) => (
            <div key={card.id} className="booking-card">
              <div
                className="card-image"
                style={{
                  backgroundImage: card.image ? `url(${card.image})` : "none",
                  backgroundColor: card.image ? "transparent" : "#f0f0f0",
                  backgroundPosition: card.id === 1 ? "right center" : "center",
                }}
              >
                <div className="card-overlay">
                  <h3 className="card-title">{card.title}</h3>
                  {card.description && (
                    <div className="card-description">
                      {card.description.map((line, index) => (
                        <p key={index} className="card-description-line">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                  <p className="card-price">{card.price}</p>
                  <button
                    className={`card-button ${
                      card.id === 1 ? "herbtime-button" : ""
                    }`}
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

ReservationPage.displayName = "ReservationPage";

export default ReservationPage;
