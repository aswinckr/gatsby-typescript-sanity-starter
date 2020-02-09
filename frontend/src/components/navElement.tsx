import React from 'react';

interface NavElementProps {
  children: React.ReactNode;
}

function navElement({ children }: NavElementProps) {
  return <>{children}</>;
}

export default navElement;
