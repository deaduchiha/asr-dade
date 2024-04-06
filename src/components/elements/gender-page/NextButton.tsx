import { useState } from "react";
import { Button, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { usePageStore } from "@/app/providers";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { useHumanBodyData } from "@/stores/human";

const NextButton = () => {
  const { nextPage } = usePageStore((state) => state);

  const {
    bodyData: { gender },
    setBodyData,
  } = useHumanBodyData();

  const [widthHandler] = useMediaQuery("(min-width: 550px)");

  const genderHandler = (type: string) => {
    setBodyData({ gender: type });
  };

  const width = widthHandler ? 300 : 150;

  const nextPageHandler = () => {
    if (gender) {
      nextPage();
    } else {
      alert("please select your gender");
    }
  };

  return (
    <>
      <Container maxW={"full"} h={"75%"}>
        <Flex justifyContent={"space-between"}>
          <Button
            as={motion.div}
            initial={{
              y: 500,
              x: -300,
            }}
            animate={{
              y: 0,
              x: 0,
            }}
            transition={"0.9s ease-in-out"}
            variant={"unstyled"}
            onClick={() => genderHandler("male")}
          >
            <ManBody
              data={{
                color: gender === "male" ? "#219ebc" : "#000",
                width,
              }}
            />
          </Button>
          <Button
            as={motion.div}
            initial={{
              y: 500,
              x: 300,
            }}
            transition={"0.9s ease-in-out"}
            animate={{
              x: 0,
              y: 0,
            }}
            variant={"unstyled"}
            onClick={() => genderHandler("female")}
          >
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
        onClick={nextPageHandler}
      >
        next page
      </Button>
    </>
  );
};

export default NextButton;
