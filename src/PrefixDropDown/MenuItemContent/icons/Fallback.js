import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__f"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#F8FAFB" />
    </mask>
    <g mask="url(#prefix__f)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_f)" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_f"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
