import { usePageStore } from "@/app/providers";
import { useHumanBodyData } from "@/stores/human";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import {
  Box,
  Button,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useState } from "react";

const WeightPage = () => {
  const { nextPage } = usePageStore((state) => state);

  const [sliderValue, setSliderValue] = useState(120);
  const [widthHandler] = useMediaQuery("(min-width: 550px)");
  const width = widthHandler ? 250 : 190;

  const { bodyData, setBodyData } = useHumanBodyData();

  const numbers = [
    50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220,
  ];

  const nextHandler = () => {
    setBodyData({ weight: sliderValue });
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
        <Flex alignSelf={"center"} flex={1} justifyContent={"center"} pl={14}>
          {bodyData.gender === "male" ? (
            <ManBody data={{ width }} />
          ) : (
            <WomanBody data={{ width }} />
          )}
        </Flex>
        <Box p={4} pt={6}>
          <Slider
            defaultValue={120}
            orientation="vertical"
            minH={{ base: "90vh", sm: "80vh" }}
            min={50}
            max={220}
            aria-label="slider-ex-6"
            onChange={(val) => setSliderValue(val)}
          >
            {numbers.map((n) => (
              <SliderMark key={n} value={n} mb="-8px" ml="-10" fontSize="sm">
                {n}
              </SliderMark>
            ))}

            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
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
