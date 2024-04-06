import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const WeightSlider = ({
  setSliderValue,
}: {
  setSliderValue(val: number): void;
}) => {
  const numbers = [
    50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220,
  ];
  return (
    <Box
      p={4}
      pt={6}
      as={motion.div}
      initial={{
        y: 240,
        x: 200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        x: 0,
        opacity: 1,
      }}
      transition={"0.6s"}
    >
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
  );
};

export default WeightSlider;
