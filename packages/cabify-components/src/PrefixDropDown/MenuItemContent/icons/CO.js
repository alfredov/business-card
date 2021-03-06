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
      id="prefix__co"
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
    <g mask="url(#prefix__co)">
      <path fill="url(#prefix__paint0_linear_co)" d="M-3 0h21v15H-3z" />
      <path fill="url(#prefix__paint1_linear_co)" d="M-3 7h21v4H-3z" />
      <path fill="url(#prefix__paint2_linear_co)" d="M-3 11h21v4H-3z" />
      <path fill="url(#prefix__paint3_linear_co)" d="M-3 0h21v7H-3z" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_co"
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
        id="prefix__paint1_linear_co"
        x1={-3}
        y1={7}
        x2={-3}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0748AE" />
        <stop offset={1} stopColor="#003993" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_co"
        x1={-3}
        y1={11}
        x2={-3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE2035" />
        <stop offset={1} stopColor="#CE1126" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_co"
        x1={-3}
        y1={0}
        x2={-3}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD935" />
        <stop offset={1} stopColor="#FDD216" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
