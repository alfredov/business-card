import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__ar"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__ar)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_ar)" />
      <path d="M18 0H-3v5h21V0z" fill="url(#prefix__paint1_linear_ar)" />
      <path d="M18 10H-3v5h21v-5z" fill="url(#prefix__paint2_linear_ar)" />
      <path d="M18 5H-3v5h21V5z" fill="url(#prefix__paint3_linear_ar)" />
      <path d="M7.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#DB7A2C" />
      <path d="M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#F4B32E" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_ar"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint1_linear_ar"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#88BBE8" />
        <stop offset={1} stopColor="#76ADDD" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_ar"
        x1={7.5}
        y1={10}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#88BBE8" />
        <stop offset={1} stopColor="#76ADDD" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_ar"
        x1={7.5}
        y1={5}
        x2={7.5}
        y2={10}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
