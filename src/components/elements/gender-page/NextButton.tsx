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
      variant={"nextButton"}
      onClick={() => nextPage()}
    >
      next page
    </Button>
  );
};

export default NextButton;
