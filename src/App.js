import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import ReservationPage from './components/ReservationPage';
import GuidePage from './components/GuidePage';
import NoticePage from './components/NoticePage';
import { useScrollSnap } from './hooks/useScrollSnap';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const aboutRef = useRef(null);
  const pricingRef = useRef(null);
  const reservationRef = useRef(null);
  const guideRef = useRef(null);
  const noticeRef = useRef(null);
  
  const pages = [
    { id: 'about', ref: aboutRef },
    { id: 'pricing', ref: pricingRef },
    { id: 'reservation', ref: reservationRef },
    { id: 'guide', ref: guideRef },
    { id: 'notice', ref: noticeRef }
  ];

  useScrollSnap(pages, currentPage, setCurrentPage);

  const scrollToPage = (pageIndex) => {
    const targetPage = pages[pageIndex];
    if (targetPage?.ref?.current) {
      targetPage.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setCurrentPage(pageIndex);
    }
  };

  const handleNavClick = (pageId) => {
    const pageIndex = pages.findIndex(p => p.id === pageId);
    if (pageIndex !== -1) {
      scrollToPage(pageIndex);
    }
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onNavClick={handleNavClick} />
      <AboutPage ref={aboutRef} />
      <PricingPage ref={pricingRef} />
      <ReservationPage ref={reservationRef} />
      <GuidePage ref={guideRef} />
      <NoticePage ref={noticeRef} />
    </div>
  );
}

export default App;

