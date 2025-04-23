import React from "react";

const Coffee = () => {
  return (
    <svg viewBox="25 10 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* <!-- Cup Body --> */}
      <path
        d="M45 50
           C45 40, 55 35, 75 35
           C95 35, 105 40, 105 50
           C105 85, 95 100, 75 100
           C55 100, 45 85, 45 50Z"
        fill="#ffffff"
        stroke="#6F4E37"
        strokeWidth="3"
      />

      {/* <!-- Coffee Surface --> */}
      <ellipse cx="75" cy="50" rx="27" ry="10" fill="#6F4E37" />

      {/* <!-- Cup Inner Rim --> */}
      <ellipse
        cx="75"
        cy="50"
        rx="30"
        ry="12"
        fill="none"
        stroke="#6F4E37"
        strokeWidth="2"
      />

      {/* <!-- Handle --> */}
      <path
        d="M105 60
           C118 60, 118 90, 105 90"
        fill="none"
        stroke="#6F4E37"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* <!-- Animated Steam Lines --> */}
      <g>
        <path
          d="M65 25C63 20 67 15 65 10"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; 0; 1"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M75 22C73 17 77 12 75 8"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-12; 0,0"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; 0; 1"
            dur="3s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M85 25C83 20 87 15 85 10"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1; 0; 1"
            dur="3s"
            begin="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};

export default Coffee;
