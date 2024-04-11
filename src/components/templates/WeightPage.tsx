import { usePageStore } from "@/app/providers";
import { useHumanBodyData } from "@/stores/human";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useState } from "react";
import WeightSlider from "../elements/weight-page/WeightSlider";

const WeightPage = () => {
  const { nextPage } = usePageStore((state) => state);
  const [widthHandler] = useMediaQuery("(min-width: 550px)");
  const { bodyData, setBodyData } = useHumanBodyData();
  const [sliderAnimate, setSliderAnimate] = useState<any>({
    x: 0,
    opacity: 1,
  });
  const [bodyAnimate, setBodyAnimate] = useState<any>({
    y: 0,
    opacity: 1,
  });

  const [bodyTransition, setBodyTransition] = useState({
    delay: 0.5,
    type: "spring",
    stiffness: 30,
  });

  const [sliderTransition, setSliderTransition] = useState({
    delay: 0.8,
    type: "spring",
    stiffness: 50,
  });

  const [sliderValue, setSliderValue] = useState(120);
  const width = widthHandler ? 250 : 190;

  const nextHandler = () => {
    setBodyData({ height: sliderValue });

    setSliderAnimate({
      x: 100,
      opacity: 0,
    });

    setBodyAnimate({
      x: -70,
      y: 0,
      opacity: 0,
    });

    setBodyTransition({
      delay: 0,
      type: "spring",
      stiffness: 30,
    });

    setSliderTransition({
      delay: 0,
      type: "spring",
      stiffness: 50,
    });

    setTimeout((_) => {
      nextPage();
    }, 540);
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
          animate={bodyAnimate}
          transition={bodyTransition}
        >
          {bodyData.gender === "male" ? (
            <ManBody data={{ width }} />
          ) : (
            <WomanBody data={{ width }} />
          )}
        </motion.div>
        <WeightSlider
          sliderAnimate={sliderAnimate}
          setSliderValue={setSliderValue}
          sliderTransition={sliderTransition}
        />
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
