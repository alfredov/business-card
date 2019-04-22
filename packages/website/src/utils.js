import { createContext } from 'react';

export const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
export const PageContext = createContext({});

export default {
  PageContext,
  wait,
};
