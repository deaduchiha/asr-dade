import { usePageStore } from "@/app/providers";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Button, Container, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const NextButton = () => {
  const { nextPage } = usePageStore((state) => state);
  const [gender, setGender] = useState("");

  const genderHandler = (type: string) => {
    setGender(type);
  };

  return (
    <>
      <Container maxW={"container.xl"} h={"75%"}>
        <Flex justifyContent={"space-between"}>
          <Button variant={"unstyled"} onClick={() => genderHandler("male")}>
            <ManBody data={{ color: gender === "male" ? "#219ebc" : "#000" }} />
          </Button>
          <Button variant={"unstyled"} onClick={() => genderHandler("female")}>
            <WomanBody
              data={{ color: gender === "female" ? "#219ebc" : "#000" }}
            />
          </Button>
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
