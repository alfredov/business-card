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
      id="prefix__pe"
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
    <g mask="url(#prefix__pe)">
      <path fill="url(#prefix__paint0_linear_pe)" d="M-3 0h21v15H-3z" />
      <path fill="url(#prefix__paint1_linear_pe)" d="M7 0h11v15H7z" />
      <path fill="url(#prefix__paint2_linear_pe)" d="M-3 0h7v15h-7z" />
      <path fill="url(#prefix__paint3_linear_pe)" d="M4 0h7v15H4z" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_pe"
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
        id="prefix__paint1_linear_pe"
        x1={7}
        y1={0}
        x2={7}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E82438" />
        <stop offset={1} stopColor="#D7172B" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_pe"
        x1={-3}
        y1={0}
        x2={-3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E82438" />
        <stop offset={1} stopColor="#D7172B" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_pe"
        x1={4}
        y1={0}
        x2={4}
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
