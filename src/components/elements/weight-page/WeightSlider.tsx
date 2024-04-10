import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  chakra,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

const transitionStyle = {
  transition: {
    delayChildren: 0.5,
    staggerDirection: -1,
  },
};

console.log({ ...transitionStyle });

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
    <motion.div
      // p={4}
      // pt={6}
      // as={motion.div}
      style={{ padding: 15, paddingTop: 10 }}
      initial={{
        x: 200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ delay: 0.8, type: "spring", stiffness: 50 }}
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
