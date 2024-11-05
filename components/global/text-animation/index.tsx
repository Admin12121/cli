"use client";

import { motion, Variants } from "framer-motion";
import SparklesText from "@/components/global/sparklin-text";
import { cn } from "@/lib/utils";

interface WordPullUpBlurProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export function WordPullUpBlur({
    words,
    wrapperFramerProps = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    framerProps = {
      hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
      show: { 
        y: 0, 
        opacity: 1, 
        filter: "blur(0px)", 
        transition: { 
          duration: 0.8, 
          ease: "easeOut",
        },
      },
    },
    className,
  }: WordPullUpBlurProps) {
    return (
      <motion.h1
        variants={wrapperFramerProps}
        initial="hidden"
        animate="show"
        className={cn(className)}
      >
        {words.split(/(\\n| )/).map((part, i) => {
          const isSparkle = part.startsWith("**") && part.endsWith("**");
          const content = isSparkle ? part.slice(2, -2) : part;
  
          return part === "\\n" ? (
            <br key={`br-${i}`} />
          ) : (
            <motion.span
              key={i}
              variants={framerProps}
              style={{ display: "inline-block", paddingRight: "8px" }}
            >
              {isSparkle ? (
                <SparklesText text={content === "" ? '\u00A0' : content}/>
              ) : (
                content === "" ? <span>&nbsp;</span> : content
              )}
            </motion.span>
          );
        })}
      </motion.h1>
    );
  }


  interface SequentialAnimatorProps {
    elements: { element: JSX.Element; group?: number }[];
    duration?: number;
    delayBetween?: number;
  }
  
  export const SequentialAnimator = ({
    elements,
    duration = 1,
    delayBetween = 0.5,
  }: SequentialAnimatorProps) => {
    const animationVariants: Variants = {
      hidden: { y: 20, filter: "blur(10px)", opacity: 0 },
      visible: { y: 0, filter: "blur(0px)", opacity: 1 },
    };
    const groupedElements = elements.reduce((acc, { element, group }, i) => {
      const groupKey = group ?? i;
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push({ element, index: i });
      return acc;
    }, {} as Record<number, { element: JSX.Element; index: number }[]>);
  
    return (
      <div>
        {Object.entries(groupedElements).map(([groupKey, groupElements]) => (
          <div key={groupKey}>
            {groupElements.map(({ element, index }) => (
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{
                  duration,
                  delay: parseInt(groupKey) * delayBetween,
                }}
              >
                {element}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    );
  };