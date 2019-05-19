import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__jp"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__jp)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_jp)" />
      <path
        d="M7.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z"
        fill="url(#prefix__paint1_linear_jp)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_jp"
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
        id="prefix__paint1_linear_jp"
        x1={7.5}
        y1={3}
        x2={7.5}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D81441" />
        <stop offset={1} stopColor="#BB0831" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
