import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
      fill="#D8D8D8"
    />
    <mask
      id="prefix__es"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__es)">
      <path fill="url(#prefix__paint0_linear_es)" d="M-3 0h21v15H-3z" />
      <path fill="url(#prefix__paint1_linear_es)" d="M-3 0h21v4H-3z" />
      <path fill="url(#prefix__paint2_linear_es)" d="M-3 11h21v4H-3z" />
      <path fill="url(#prefix__paint3_linear_es)" d="M-3 4h21v7H-3z" />
      <path d="M2.5 7h1v.5h-1V7z" fill="#FFEDB1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.756 6.5a.456.456 0 0 0-.465.495l.126 1.506c.046.556.53.999 1.083.999.556 0 1.037-.447 1.083-.999l.126-1.506a.45.45 0 0 0-.465-.495H1.756zM2.5 9a.604.604 0 0 1-.585-.54L1.793 7h1.414l-.122 1.46A.604.604 0 0 1 2.5 9z"
        fill="#A41517"
      />
      <path
        d="M1.5 7.5h2V8H3l-.5 1L2 8h-.5v-.5zM0 6h1v3.5H0zM4 6h1v3.5H4zM1.5 5.5c0-.276.214-.5.505-.5h.99c.279 0 .505.232.505.5v.248c0 .139-.108.252-.245.252h-1.51a.245.245 0 0 1-.245-.252V5.5z"
        fill="#A41517"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_es"
        x1={-3}
        y1={0}
        x2={-3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint1_linear_es"
        x1={-3}
        y1={0}
        x2={-3}
        y2={4}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD172C" />
        <stop offset={1} stopColor="#C60B1F" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_es"
        x1={-3}
        y1={11}
        x2={-3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD172C" />
        <stop offset={1} stopColor="#C60B1F" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_es"
        x1={-3}
        y1={4}
        x2={-3}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD133" />
        <stop offset={1} stopColor="#FFC500" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
