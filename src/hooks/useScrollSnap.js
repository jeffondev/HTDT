import { useEffect, useRef } from "react";

export const useScrollSnap = (pages, currentPage, setCurrentPage) => {
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const deltaY = e.deltaY;
      const minScrollThreshold = 30; // 최소 스크롤 거리
      const totalPages = pages.length;

      // 스크롤 거리가 너무 작으면 무시
      if (Math.abs(deltaY) < minScrollThreshold) {
        return;
      }

      // 스크롤 방향만 확인 (세기는 무시)
      const scrollDirection = deltaY > 0 ? 1 : -1;

      if (scrollDirection > 0 && currentPage < totalPages - 1) {
        // Scroll down - go to next page
        isScrolling.current = true;
        e.preventDefault();
        const nextPage = currentPage + 1;
        const targetPage = pages[nextPage];

        if (targetPage?.ref?.current) {
          targetPage.ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setCurrentPage(nextPage);

          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      } else if (scrollDirection < 0 && currentPage > 0) {
        // Scroll up - go to previous page
        isScrolling.current = true;
        e.preventDefault();
        const prevPage = currentPage - 1;
        const targetPage = pages[prevPage];

        if (targetPage?.ref?.current) {
          targetPage.ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          setCurrentPage(prevPage);

          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (isScrolling.current) return;

      const swipeDistance = touchStartY - touchEndY;
      const minSwipeDistance = 50;
      const totalPages = pages.length;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0 && currentPage < totalPages - 1) {
          // Swipe up - go to next page
          isScrolling.current = true;
          const nextPage = currentPage + 1;
          const targetPage = pages[nextPage];

          if (targetPage?.ref?.current) {
            targetPage.ref.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setCurrentPage(nextPage);

            setTimeout(() => {
              isScrolling.current = false;
            }, 800);
          }
        } else if (swipeDistance < 0 && currentPage > 0) {
          // Swipe down - go to previous page
          isScrolling.current = true;
          const prevPage = currentPage - 1;
          const targetPage = pages[prevPage];

          if (targetPage?.ref?.current) {
            targetPage.ref.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setCurrentPage(prevPage);

            setTimeout(() => {
              isScrolling.current = false;
            }, 800);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [pages, currentPage, setCurrentPage]);
};
