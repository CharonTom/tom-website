"use client";

import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from "react";

function ScrollToTop() {
  const [ScrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      {ScrollToTop && (
        <button
          className="flex justify-center items-center fixed inline-block sm:bottom-8  group bottom-[100px] right-10 bg-secondary border border-primary text-primary text-[17px] w-[40px] h-[40px] rounded-md cursor-pointer z-20"
          onClick={scrollUp}
        >
          <FaAngleUp className="transition-all duration-300 group-hover:-translate-y-[3px]" />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
