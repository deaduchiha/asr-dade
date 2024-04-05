import { usePageStore } from "@/app/providers";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Button, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const NextButton = () => {
  const { nextPage } = usePageStore((state) => state);
  const [gender, setGender] = useState("");
  const [widthHandler] = useMediaQuery("(min-width: 550px)");

  const genderHandler = (type: string) => {
    setGender(type);
  };

  const width = widthHandler ? 300 : 150;

  return (
    <>
      <Container maxW={"full"} h={"75%"}>
        <Flex justifyContent={"space-between"}>
          <Button
            variant={"unstyled"}
            onClick={() => genderHandler("male")}
            _selection={{ bg: "red" }}
          >
            <ManBody
              data={{
                color: gender === "male" ? "#219ebc" : "#000",
                width,
              }}
            />
          </Button>
          <Button variant={"unstyled"} onClick={() => genderHandler("female")}>
            <WomanBody
              data={{
                color: gender === "female" ? "#219ebc" : "#000",
                width,
              }}
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
