import React from 'react';

const SvgComponent = props => (
  <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
    <mask
      id="prefix__br"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={15}
      height={15}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#C4C4C4" />
    </mask>
    <g mask="url(#prefix__br)">
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint0_linear_br)" />
      <path d="M18 0H-3v15h21V0z" fill="url(#prefix__paint1_linear_br)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-.578 7.773c-.233-.15-.228-.398 0-.546l7.657-4.954a.85.85 0 0 1 .843 0l7.657 4.954c.232.15.228.398 0 .546l-7.657 4.954a.85.85 0 0 1-.843 0L-.578 7.773z"
        fill="#FDD216"
      />
      <mask
        id="prefix__b_br"
        maskUnits="userSpaceOnUse"
        x={4}
        y={4}
        width={7}
        height={7}
      >
        <path d="M7.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" fill="#fff" />
      </mask>
      <g mask="url(#prefix__b_br)">
        <path
          d="M7.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
          fill="url(#prefix__paint2_linear_br)"
        />
        <path
          d="M3.9 6.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.63.777.388-.314z"
          fill="#fff"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="prefix__paint0_linear_br"
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
        id="prefix__paint1_linear_br"
        x1={7.5}
        y1={0}
        x2={7.5}
        y2={15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#05AB41" />
        <stop offset={1} stopColor="#019C39" />
      </linearGradient>
      <linearGradient
        id="prefix__paint2_linear_br"
        x1={7.5}
        y1={4}
        x2={7.5}
        y2={11}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#053087" />
        <stop offset={1} stopColor="#012877" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
