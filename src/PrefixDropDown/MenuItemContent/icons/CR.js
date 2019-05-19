import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__cr"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__cr)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_cr)" />
      <path d="M18 0H-3v3h21V0z" fill="url(#prefix__paint1_linear_cr)" />
      <path d="M18 12H-3v3h21v-3z" fill="url(#prefix__paint2_linear_cr)" />
      <path d="M18 3H-3v9h21V3z" fill="url(#prefix__paint3_linear_cr)" />
      <path d="M18 5H-3v5h21V5z" fill="url(#prefix__paint4_linear_cr)" />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_cr"
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
        id="prefix__paint1_linear_cr"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={3}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#06358F" />
        <stop offset={1} stopColor="#042E7D" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_cr"
        x1={7.5}
        y1={12}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#06358F" />
        <stop offset={1} stopColor="#042E7D" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_cr"
        x1={7.5}
        y1={3}
        x2={7.5}
        y2={12}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint4_linear_cr"
        x1={7.5}
        y1={5}
        x2={7.5}
        y2={10}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E61F37" />
        <stop offset={1} stopColor="#CC162C" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
