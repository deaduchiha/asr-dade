import { usePageStore } from "@/app/providers";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Button, Container, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const NextButton = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <>
      <Container maxW={"container.xl"} border={"1px solid red"} h={"75%"}>
        <Flex justifyContent={"space-between"}>
          <ManBody data={{}} />
          <WomanBody data={{}} />
        </Flex>
      </Container>
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
    </>
  );
};

export default NextButton;
