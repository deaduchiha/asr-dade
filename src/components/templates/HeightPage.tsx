import { usePageStore } from "@/app/providers";
import { useHumanBodyData } from "@/stores/human";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import CircularSlider from "react-circular-slider-svg";

const HeightPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);
  const { bodyData, setBodyData } = useHumanBodyData();
  const [widthHandler] = useMediaQuery("(min-width: 550px)");

  const [value1, setValue1] = useState(20);
  const width = widthHandler ? 250 : 190;

  const nextHandler = () => {
    setBodyData({ weight: value1 });
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
      <Button onClick={prevPage} pos={"absolute"}>
        Prev
      </Button>
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
        {value1}
        <Text fontWeight={800} as={"span"}>
          kg
        </Text>
      </Text>
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
            direction: "cw",
            axis: "-y",
          }}
          handle1={{
            value: value1,
            onChange: (v) => setValue1(v),
          }}
          arcColor="orange"
          arcBackgroundColor="#000"
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
