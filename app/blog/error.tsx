'use client';

import React from 'react';

const ErrowWrapper = ({ error }: { error: Error }) => {
  return <h1>Oopps! {error.message}</h1>;
};

export default ErrowWrapper;
