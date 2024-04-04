"use client";

import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useAnimateStyleState } from "@/stores/animate-start";

import Navigation from "@/shared/navigation/Navigation";
import Human from "@/elements/start-page/Human";

const StartPage = () => {
  const [glareColor, setGlareColor] = useState<string>("#0077b6");
  const { animateStyle } = useAnimateStyleState();

  const animationConfig = {
    initial: {
      height: "0",
      width: "full",
      y: 700,
      x: 0,
      opacity: 0,
      transitionDuration: "1s",
    },
    animate: animateStyle,
  };

  return (
    <>
      <Flex
        as={motion.div}
        {...animationConfig}
        justifyContent="center"
        alignItems="center"
        flexDir={"column"}
      >
        <Human glareColor={glareColor} setGlareColor={setGlareColor} />
      </Flex>
      <Navigation />
    </>
  );
};

export default StartPage;
