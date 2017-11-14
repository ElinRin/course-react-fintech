import React from 'react';

import Money from '../Money/Money';

export default ({ title, price, type }) => (
  <div>
    <b>{type}</b>: <b>{title}</b> - <Money value={price}></Money>
  </div>
);
