'use client';
import { motion, Variants } from 'framer-motion';
import { splitText } from '../utils/splitText';
import React from 'react';


const AnimatedText = ({ text, containerVariants, charVariants  } : {text: string, containerVariants: Variants, charVariants: Variants}) => {
  const characters = splitText(text);

  return (
    <motion.div
      className="inline-block overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {characters.map(
        ({ char, key }) => (
          <motion.span key={key} className="inline-block" variants={charVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )
      )
      }
    </motion.div>
  );
};

export default AnimatedText;
