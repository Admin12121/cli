'use client';
import NumberFlow from '@number-flow/react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useState } from 'react';

interface NumberAnimationProps {
    value: number;
    label?: string;
}

const NumberAnimation = ({value, label}:NumberAnimationProps) => {

  return (

      <div className='  text-lg font-medium'>
        <NumberFlow value={value} format={{ notation: 'compact' }} /> {label}
      </div>
  );
};

export default NumberAnimation;
