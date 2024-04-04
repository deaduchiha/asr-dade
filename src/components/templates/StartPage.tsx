import { usePageStore } from "@/app/providers";
import { Button, Flex } from "@chakra-ui/react";
import Navigation from "@/shared/navigation/Navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);
  const [animation, setAnimation] = useState({
    height: "85%",
    opacity: 1,
  });

  const nextHandler = () => {
    setAnimation({
      height: "200px",
      opacity: 0,
    });

    setTimeout(() => {
      nextPage();
    }, 200);
  };

  return (
    <AnimatePresence mode="wait">
      <Flex
        as={motion.div}
        initial={{
          height: "0%",
          opacity: 0,
        }}
        animate={animation}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 2,
          ease: "ease-in-out",
        }}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        justifyContent="center"
        alignItems="center"
        width="full"
      >
        <Button onClick={nextHandler}>next page</Button>
        ssds
      </Flex>
      <Navigation />
    </AnimatePresence>
  );
};

export default StartPage;
