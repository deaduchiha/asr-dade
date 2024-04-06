import { useHumanBodyData } from "@/stores/human";
import { Stack, Text } from "@chakra-ui/react";

const ResultPage = () => {
  const {
    bodyData: { gender, height, result, weight },
  } = useHumanBodyData();

  return (
    <Stack
      alignItems={"center"}
      spacing={10}
      justifyContent={"center"}
      h={"100svh"}
    >
      <Text>gender: {gender}</Text>
      <Text>weight: {weight}cm</Text>
      <Text>height: {height}kg</Text>
    </Stack>
  );
};

export default ResultPage;
