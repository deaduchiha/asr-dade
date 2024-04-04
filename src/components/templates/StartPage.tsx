"use client";

import { usePageStore } from "@/app/providers";
import { Button, Flex } from "@chakra-ui/react";
import Navigation from "@/shared/navigation/Navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Human from "../elements/start-page/Human";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);

  const [animation, setAnimation] = useState<any>({
    height: "85%",
    opacity: 1,
    x: 0,
    y: 0,
    animationDuration: "0.7s",
    transitionDuration: "0.7s",
    transition: {},
  });
  const [glareColor, setGlareColor] = useState<string>("#000");

  const nextHandler = () => {
    setAnimation({
      height: "inherit",
      x: -500,
      y: 100,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 2,
        opacity: {
          duration: 1,
          height: 2,
        },
      },
    });

    setTimeout(() => {
      nextPage();
    }, 900);
  };

  return (
    <>
      <Flex
        as={motion.div}
        initial={{
          height: "0%",
          opacity: 0,
          x: -500,
          animationDuration: "0.6 ease-in-out",
          transitionDuration: "0.6s ease-in-out",
        }}
        animate={animation}
        justifyContent="center"
        alignItems="center"
        width="full"
        flexDir={"column"}
      >
        <Human glareColor={glareColor} setGlareColor={setGlareColor} />
        <Button onClick={nextHandler}>next page</Button>
      </Flex>
      <Navigation />
    </>
  );
};

export default StartPage;
