import { usePageStore } from "@/app/providers";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const NextButton = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <Button
      as={motion.button}
      initial={{
        y: 40,
      }}
      animate={{
        y: -70,
      }}
      pos={"absolute"}
      bottom={0}
      right={0}
      left={0}
      onClick={() => nextPage()}
      w={"fit-content"}
      m={"auto"}
      bg={"#2d6a4f"}
      colorScheme="green"
    >
      next page
    </Button>
  );
};

export default NextButton;
