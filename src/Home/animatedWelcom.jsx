import React, { useEffect, useState } from 'react';

const AnimatedPenWriting = () => {
  const [animationDone, setAnimationDone] = useState(false);

  // Trigger animation complete after text is drawn
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 4000); // Match the animation time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative">
        {/* The text "Welcome" animated */}
        <svg
          viewBox="0 0 400 100"
          className="w-[400px] h-[100px] overflow-visible"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-none stroke-black stroke-[2] animate-draw"
          >
            Welcome
          </text>
        </svg>

        {/* The pen that writes the text */}
        <div
          className={`w-5 h-5 bg-black rounded-full absolute top-[40px] left-0 ${
            animationDone ? 'hidden' : 'block'
          } animate-move-pen`}
        />
      </div>
    </div>
  );
};

export default AnimatedPenWriting;
