"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import useStoreColor from "@/store/useStore";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    image: string
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#f9c465",
    "#dddbdc",
    "#f5cf8a",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const { changeColor } = useStoreColor();

  useEffect(() => {
    changeColor(backgroundColors[activeCard % backgroundColors.length]);
  }, [activeCard, changeColor]);



  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-x-hidden scroll-bar-hidden md:h-[33rem] overflow-y-auto w-11/12 md:w-full flex md:justify-center relative space-x-10 rounded-md md:p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="md:w-full md:mx-auto">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 flex flex-col md:flex-row  item-center gap-5">
              <div className="flex flex-col min-w-[600px] md:min-w-[800px] md:max-w-[800px]">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl md:text-3xl font-bold text-slate-800"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-base md:text-xl text-slate-700  mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
              <div className="w-[58%] md:min-w-[50%] p-2">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="h-[250px] object-cover rounded-2xl mx-auto"
                />
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      {/* The sticky content remains the same */}
    </motion.div>
  );

};
