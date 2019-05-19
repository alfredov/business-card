/* eslint-disable react/prop-types */
import React from 'react';

export default ({ children, style }) => (
  <div style={{ marginBottom: 24, ...style }}>{children}</div>
);
