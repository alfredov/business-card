import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__ec"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__ec)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_ec)" />
      <path d="M18 7H-3v4h21V7z" fill="url(#prefix__paint1_linear_ec)" />
      <path d="M18 11H-3v4h21v-4z" fill="url(#prefix__paint2_linear_ec)" />
      <path d="M18 0H-3v7h21V0z" fill="url(#prefix__paint3_linear_ec)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.3 6a2 2 0 1 0 2.4 0L8 8.1H7L6.3 6z"
        fill="url(#prefix__paint4_linear_ec)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 5.5L8 8H7l.5-2.5z"
        fill="#5FC0DC"
      />
      <path
        opacity={0.66}
        d="M6.677 3.823a.25.25 0 0 0-.256-.06l-1.5.5a.25.25 0 0 0 .158.474l1.354-.451.89.89a.25.25 0 0 0 .354 0l.89-.89 1.354.451a.25.25 0 1 0 .158-.474l-1.5-.5a.25.25 0 0 0-.256.06l-.823.823-.823-.823z"
        fill="#3F2821"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_ec"
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
        id="prefix__paint1_linear_ec"
        x1={7.5}
        y1={7}
        x2={7.5}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0748AE" />
        <stop offset={1} stopColor="#003993" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_ec"
        x1={7.5}
        y1={11}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE2035" />
        <stop offset={1} stopColor="#CE1126" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_ec"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFD935" />
        <stop offset={1} stopColor="#FDD216" />
      </linearGradient>
      <linearGradient
        id="prefix__paint4_linear_ec"
        x1={7.5}
        y1={6}
        x2={7.5}
        y2={9.6}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FBDC44" />
        <stop offset={1} stopColor="#FFDC32" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
