import { usePageStore } from "@/app/providers";
import { useHumanBodyData } from "@/stores/human";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useState } from "react";
import WeightSlider from "../elements/weight-page/WeightSlider";

const WeightPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);

  const [sliderValue, setSliderValue] = useState(120);
  const [widthHandler] = useMediaQuery("(min-width: 550px)");
  const width = widthHandler ? 250 : 190;

  const { bodyData, setBodyData } = useHumanBodyData();

  const nextHandler = () => {
    setBodyData({ height: sliderValue });
    nextPage();
  };

  return (
    <>
      <Flex justifyContent={"space-between"} pos={"relative"}>
        <Text
          m={"0 auto"}
          as={"p"}
          w={"fit-content"}
          pos={"absolute"}
          left={0}
          right={0}
          bg={"green.300"}
          p={"5px 10px"}
          borderRadius={4}
        >
          {sliderValue}
          <Text fontWeight={800} as={"span"}>
            cm
          </Text>
        </Text>
        <motion.div
          // as={motion.div}
          style={{
            flex: 1,
            display: "flex",
            alignSelf: "center",
            paddingLeft: 14,
            justifyContent: "center",
          }}
          // alignSelf={"center"}
          // flex={1}
          // justifyContent={"center"}
          // pl={14}
          initial={{
            y: 220,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 30,
          }}
        >
          {bodyData.gender === "male" ? (
            <ManBody data={{ width }} />
          ) : (
            <WomanBody data={{ width }} />
          )}
        </motion.div>
        <WeightSlider setSliderValue={setSliderValue} />
      </Flex>
      <Button
        as={motion.button}
        initial={{
          y: 40,
        }}
        animate={{
          y: -70,
        }}
        variant={"nextButton"}
        onClick={nextHandler}
      >
        next
      </Button>
    </>
  );
};

export default WeightPage;
