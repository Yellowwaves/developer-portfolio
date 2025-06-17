'use client';

import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import lottie-react to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  if (!animationPath) return null;

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width }}
    />
  );
};

export default AnimationLottie;
