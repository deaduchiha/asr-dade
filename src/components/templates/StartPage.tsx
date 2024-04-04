"use client";

import { usePageStore } from "@/app/providers";
import { Button, Flex } from "@chakra-ui/react";
import Navigation from "@/shared/navigation/Navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Human from "../elements/start-page/Human";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);
  const [glareColor, setGlareColor] = useState<string>("#0077b6");

  const [animation, setAnimation] = useState<any>({
    width: "100%",
    height: "85%",
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 2,
      opacity: {
        duration: 1,
        height: 2,
      },
    },
  });

  const nextHandler = () => {
    setAnimation({
      width: "200px",
      height: "inherit",
      x: 0,
      y: 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 2,
        opacity: {
          duration: 1,
        },
        height: {
          duration: 0.5,
        },
        width: {
          duration: 5,
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
          height: "0",
          width: "full",
          y: 700,
          opacity: 0,
        }}
        animate={animation}
        justifyContent="center"
        alignItems="center"
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
