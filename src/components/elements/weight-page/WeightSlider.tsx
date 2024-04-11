import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const WeightSlider = ({
  setSliderValue,
  sliderAnimate,
  sliderTransition,
}: {
  setSliderValue(val: number): void;
  sliderAnimate: {};
  sliderTransition: {};
}) => {
  const numbers = [
    50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220,
  ];

  return (
    <motion.div
      // p={4}
      // pt={6}
      // as={motion.div}
      style={{ padding: 15, paddingTop: 10 }}
      initial={{
        x: 200,
        opacity: 0,
      }}
      animate={sliderAnimate}
      // transition={{ delay: 0.8, type: "spring", stiffness: 50 }}
      transition={sliderTransition}
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
    </motion.div>
  );
};

export default WeightSlider;
