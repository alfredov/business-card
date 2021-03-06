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
      id="prefix__cl"
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
    <g mask="url(#prefix__cl)">
      <path fill="url(#prefix__paint0_linear_cl)" d="M-3 0h21v15H-3z" />
      <path fill="url(#prefix__paint1_linear_cl)" d="M-3 7h21v8H-3z" />
      <path fill="url(#prefix__paint2_linear_cl)" d="M-3 0h21v7H-3z" />
      <path fill="url(#prefix__paint3_linear_cl)" d="M-3 0h7v7h-7z" />
      <path
        d="M.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377L.5 4.28z"
        fill="url(#prefix__paint4_linear_cl)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_cl"
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
        id="prefix__paint1_linear_cl"
        x1={-3}
        y1={7}
        x2={-3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EA3B2E" />
        <stop offset={1} stopColor="#D52B1E" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_cl"
        x1={-3}
        y1={0}
        x2={-3}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_cl"
        x1={-3}
        y1={0}
        x2={-3}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B48C2" />
        <stop offset={1} stopColor="#0239A7" />
      </linearGradient>
      <linearGradient
        id="prefix__paint4_linear_cl"
        x1={-1.402}
        y1={1.5}
        x2={-1.402}
        y2={5.118}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
