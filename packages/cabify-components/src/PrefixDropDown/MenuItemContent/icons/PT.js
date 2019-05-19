import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__pt"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__pt)">
      <path d="M20 0H-1v15h21V0z" fill="url(#prefix__paint0_linear_pt)" />
      <path d="M20 0H-1v15h21V0z" fill="url(#prefix__paint1_linear_pt)" />
      <path d="M7 0h-8v15h8V0z" fill="url(#prefix__paint2_linear_pt)" />
      <path
        d="M7 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        fill="url(#prefix__paint3_linear_pt)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6.256A.25.25 0 0 1 6.245 6h1.51A.25.25 0 0 1 8 6.256V8A.997.997 0 0 1 7 9c-.552 0-1-.443-1-.999V6.256z"
        fill="url(#prefix__paint4_linear_pt)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8c.276 0 .5-.724.5-1a.5.5 0 0 0-1 0c0 .276.224 1 .5 1z"
        fill="url(#prefix__paint5_linear_pt)"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_pt"
        x1={9.5}
        y1={0}
        x2={9.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint1_linear_pt"
        x1={9.5}
        y1={0}
        x2={9.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF2936" />
        <stop offset={1} stopColor="#FD0D1B" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_pt"
        x1={3}
        y1={0}
        x2={3}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#128415" />
        <stop offset={1} stopColor="#0A650C" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_pt"
        x1={7}
        y1={4.5}
        x2={7}
        y2={10.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FAF94F" />
        <stop offset={1} stopColor="#F8F736" />
      </linearGradient>
      <linearGradient
        id="prefix__paint4_linear_pt"
        x1={7}
        y1={6}
        x2={7}
        y2={9}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint5_linear_pt"
        x1={7}
        y1={6.5}
        x2={7}
        y2={8}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1D50B5" />
        <stop offset={1} stopColor="#15439D" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
