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
      id="prefix__mx"
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
    <g mask="url(#prefix__mx)">
      <path fill="url(#prefix__paint0_linear_mx)" d="M-3 0h21v15H-3z" />
      <path fill="url(#prefix__paint1_linear_mx)" d="M7 0h11v15H7z" />
      <path fill="url(#prefix__paint2_linear_mx)" d="M-3 0h7v15h-7z" />
      <path fill="url(#prefix__paint3_linear_mx)" d="M4 0h7v15H4z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.247 9.164A2.499 2.499 0 0 1 5 7a.5.5 0 0 1 1 0c0 .541.289 1.032.749 1.299a.5.5 0 0 1-.502.865zM10 7c0 .863-.441 1.651-1.154 2.107a.5.5 0 0 1-.54-.842C8.737 7.99 9 7.518 9 7a.5.5 0 0 1 1 0z"
        fill="#8C9157"
      />
      <path
        d="M7.5 8c.552 0 1-.672 1-1.5S8.052 5 7.5 5s-1 .672-1 1.5.448 1.5 1 1.5z"
        fill="#C59262"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_mx"
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
        id="prefix__paint1_linear_mx"
        x1={7}
        y1={0}
        x2={7}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3283E" />
        <stop offset={1} stopColor="#CC162C" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_mx"
        x1={-3}
        y1={0}
        x2={-3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#128A60" />
        <stop offset={1} stopColor="#0B6848" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_mx"
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
