import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__do"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__do)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_do)" />
      <path d="M6 0h-9v6h9V0z" fill="url(#prefix__paint1_linear_do)" />
      <path d="M18 9H9v6h9V9z" fill="url(#prefix__paint2_linear_do)" />
      <path d="M6 9h-9v6h9V9z" fill="url(#prefix__paint3_linear_do)" />
      <path d="M18 0H9v6h9V0z" fill="url(#prefix__paint4_linear_do)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6h-9v3h9v6h3V9h9V6H9V0H6v6z"
        fill="url(#prefix__paint5_linear_do)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.44 6.44a1.5 1.5 0 1 0 2.12 0"
        fill="#C93127"
        fillOpacity={0.2}
      />
      <path d="M7.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#042F60" />
      <path
        d="M8.56 8.56a1.5 1.5 0 1 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122zm0 0a1.5 1.5 0 1 1-2.12-2.12l.353.353a1 1 0 1 0 1.414 0l.354-.354a1.5 1.5 0 0 1 0 2.122z"
        fill="#0F6D1A"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_do"
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
        id="prefix__paint1_linear_do"
        x1={1.5}
        y1={0}
        x2={1.5}
        y2={6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#083D7A" />
        <stop offset={1} stopColor="#032F61" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_do"
        x1={13.5}
        y1={9}
        x2={13.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#083D7A" />
        <stop offset={1} stopColor="#032F61" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_do"
        x1={1.5}
        y1={9}
        x2={1.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DF1E35" />
        <stop offset={1} stopColor="#CC162C" />
      </linearGradient>
      <linearGradient
        id="prefix__paint4_linear_do"
        x1={13.5}
        y1={0}
        x2={13.5}
        y2={6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DF1E35" />
        <stop offset={1} stopColor="#CC162C" />
      </linearGradient>
      <linearGradient
        id="prefix__paint5_linear_do"
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
