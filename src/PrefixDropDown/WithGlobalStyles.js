import React from 'react';
import { Global, css } from '@emotion/core';

const WithGlobalStyles = () => (
  <Global
    styles={css`
      /* Used to detect in JavaScript if apps have loaded styles or not. */
      :root {
        --reach-menu-button: 1;
      }

      [data-reach-menu] {
        font-family: sans-serif;
        display: block;
        position: absolute;
      }

      [data-reach-menu-list] {
        display: block;
        white-space: nowrap;
        border: solid 1px hsla(0, 0%, 0%, 0.25);
        background: hsla(0, 100%, 100%, 0.99);
        outline: none;
        padding: 1rem 0;
        font-size: 85%;
      }

      [data-reach-menu-item] {
        display: block;
      }


      [data-reach-menu-item] {
        /* reach-menu-item */
        cursor: pointer;

        /* a */
        display: block;
        color: inherit;
        font: inherit;
        text-decoration: initial;

        /* both */
        padding: 5px 20px;
      }

      /* pseudo pseudo selector */
      [data-reach-menu-item][data-selected] {
        background: hsl(211, 81%, 36%);
        color: white;
        outline: none;
      }

    `}
  />
);

export default WithGlobalStyles;
