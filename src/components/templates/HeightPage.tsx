import { usePageStore } from "@/app/providers";
import { useHumanBodyData } from "@/stores/human";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Box, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import CircularSlider from "react-circular-slider-svg";

const HeightPage = () => {
  const { nextPage } = usePageStore((state) => state);
  const { bodyData, setBodyData } = useHumanBodyData();
  const [widthHandler] = useMediaQuery("(min-width: 550px)");

  const [value1, setValue1] = useState(20);
  const width = widthHandler ? 250 : 190;

  const nextHandler = () => {
    setBodyData({ height: value1 });
    nextPage();
  };

  return (
    <Flex
      pos={"relative"}
      h={"100svh"}
      as={motion.div}
      initial={{
        y: 200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={"0.8s"}
    >
      <Flex alignSelf={"center"} flex={1} justifyContent={"center"}>
        {bodyData.gender === "male" ? (
          <ManBody data={{ width }} />
        ) : (
          <WomanBody data={{ width }} />
        )}
      </Flex>

      <Box
        w="fit-content"
        left={0}
        right={0}
        m={"auto"}
        pos={"absolute"}
        bottom={0}
      >
        <CircularSlider
          minValue={0}
          maxValue={125}
          coerceToInt
          startAngle={60}
          endAngle={300}
          angleType={{
            direction: "ccw",
            axis: "-y",
          }}
          handle1={{
            value: value1,
            onChange: (v) => setValue1(v),
          }}
          arcColor="#000"
          arcBackgroundColor="orange"
          size={widthHandler ? 400 : 300}
        />
      </Box>
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
    </Flex>
  );
};

export default HeightPage;
