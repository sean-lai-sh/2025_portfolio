'use client';
import { motion, Variants } from 'framer-motion';
import { splitText } from '../utils/splitText';
import React from 'react';


const AnimatedText = ({ text, containerVariants, charVariants  } : {text: string, containerVariants: Variants, charVariants: Variants}) => {
  const characters = splitText(text);
  const finalSplit = <></>;
  // Objetives, have function that takes in text and has first grouped by char, then by word, then by sentence
  const splitWordsByChar = (text: Array<string>) => {
    return text.map((word, index) => {
      // Split the word into characters
      const characters = word.split('');
      // Append a non breaking space to the end of the word if index < text.length - 1
      if (index < characters.length - 1) {
        characters.push("\u00A0"); // Unicode for non-breaking space
      }

      return (
        <span key={`word-${index}`} className="relative inline-block">
          {characters.map((char, charIndex) => (
            <motion.span 
              key={`char-${index}-${charIndex}`} 
              className="inline-block" 
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </span>
      );
    });
  }
  return (
    <motion.div
      className="inline-block overflow-hidden "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* {characters.map(
        ({ char, key }) => (
          <motion.span key={key} className="inline-block" variants={charVariants}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        )
      )
      
      } */}
      {
        splitWordsByChar(characters)
      }
    </motion.div>
  );
};

export default AnimatedText;
