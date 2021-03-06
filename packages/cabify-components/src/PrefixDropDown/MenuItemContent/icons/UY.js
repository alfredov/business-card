import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__uy"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__uy)">
      <path d="M20 0H-1v15h21V0z" fill="url(#prefix__paint0_linear_uy)" />
      <path d="M20 0H-1v15h21V0z" fill="url(#prefix__paint1_linear_uy)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0h11v2H9V0zm0 4h11v2H9V4zm0 4h11v2H9V8zm-10 4h21v2H-1v-2zm0-12H9v10H-1V0z"
        fill="url(#prefix__paint2_linear_uy)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6.991l-.668.996L3.163 6.8l-1.033.608.362-1.143-1.195.1.823-.873L1 5.062l1.12-.428-.823-.873 1.195.1-.362-1.144 1.033.608.17-1.187.667.996.668-.996.169 1.187 1.033-.608-.362 1.143 1.195-.099-.823.873L7 5.063l-1.12.429.823.872-1.195-.1.362 1.144L4.837 6.8l-.17 1.187L4 6.991zm0-.02a1.91 1.91 0 1 0 0-3.817 1.91 1.91 0 0 0 0 3.818zM4 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        fill="url(#prefix__paint3_linear_uy)"
      />
      <path
        d="M3.125 5a.125.125 0 1 1 .25 0A.622.622 0 0 0 4 5.625c.243 0 .46-.14.564-.355l.038-.07.014-.023c.048-.08.062-.119.062-.177a.125.125 0 0 1 .25 0 .534.534 0 0 1-.097.304l-.013.022-.028.052A.875.875 0 0 1 3.125 5zM4.5 4.75a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5zm-1 0a.25.25 0 1 1 0-.5.25.25 0 0 1 0 .5z"
        fill="#C6A326"
      />
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_uy"
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
        id="prefix__paint1_linear_uy"
        x1={9.5}
        y1={0}
        x2={9.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E4DC5" />
        <stop offset={1} stopColor="#073DA6" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_uy"
        x1={9.5}
        y1={0}
        x2={9.5}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#F0F0F0" />
      </linearGradient>
      <linearGradient
        id="prefix__paint3_linear_uy"
        x1={4}
        y1={2.138}
        x2={4}
        y2={7.987}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FED443" />
        <stop offset={1} stopColor="#FCD036" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
