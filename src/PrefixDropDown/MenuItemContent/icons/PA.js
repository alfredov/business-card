import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__pa"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__pa)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_pa)" />
      <path d="M18 0H-3v7h21V0z" fill="url(#prefix__paint1_linear_pa)" />
      <path d="M18 7H-3v8h21V7z" fill="url(#prefix__paint2_linear_pa)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-3 7V0H7v7H-3zm10 8V7h11v8H7z"
        fill="url(#prefix__paint3_linear_pa)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L2 1.5l.482 1.337 1.42.045-1.122.871.396 1.365L2 4.32z"
        fill="url(#prefix__paint4_linear_pa)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 11.82l-1.176.798.396-1.365-1.122-.871 1.42-.045L12.5 9l.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798z"
        fill="url(#prefix__paint5_linear_pa)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_pa"
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
        id="prefix__paint1_linear_pa"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E52448" />
        <stop offset={1} stopColor="#D01739" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_pa"
        x1={7.5}
        y1={7}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1367AE" />
        <stop offset={1} stopColor="#0A5492" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_pa"
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
        id="prefix__paint4_linear_pa"
        x1={2}
        y1={1.5}
        x2={2}
        y2={5.118}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1367AE" />
        <stop offset={1} stopColor="#0A5492" />
      </linearGradient>
      <linearGradient
        id="prefix__paint5_linear_pa"
        x1={12.5}
        y1={9}
        x2={12.5}
        y2={12.618}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E52448" />
        <stop offset={1} stopColor="#D01739" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
