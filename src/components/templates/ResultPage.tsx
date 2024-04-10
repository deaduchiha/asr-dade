import { useHumanBodyData } from "@/stores/human";
import ManBody from "@/svg/ManBody";
import WomanBody from "@/svg/WomanBody";
import { Box, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ResultPage = () => {
  const {
    bodyData: { gender, height, weight },
  } = useHumanBodyData();

  return (
    <Stack
      alignItems={"center"}
      pos={"relative"}
      spacing={10}
      justifyContent={"center"}
      h={"100svh"}
      as={motion.div}
      zIndex={2}
      initial={{
        background: "#000",
        opacity: 0,
        y: 200,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
      }}
      animate={{
        background: "#f8f9fa",
        opacity: 1,
        y: 0,
      }}
      transition={"1s"}
    >
      <Text pos={"relative"} zIndex={4}>
        gender: {gender}
      </Text>
      <Text pos={"relative"} zIndex={4}>
        height: {height}cm
      </Text>
      <Text pos={"relative"} zIndex={4}>
        weight: {weight}kg
      </Text>

      <Box
        as={motion.div}
        top={0}
        position={"absolute"}
        zIndex={1}
        drag
        dragTransition={{
          min: 0,
          max: 50,
          bounceStiffness: 120,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={"0.9s"}
      >
        {gender === "male" ? (
          <ManBody data={{ color: "#ccc" }} />
        ) : (
          <WomanBody data={{ color: "#ccc" }} />
        )}
      </Box>
    </Stack>
  );
};

export default ResultPage;
