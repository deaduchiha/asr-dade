import { Flex } from "@chakra-ui/react";
import NextButton from "../elements/gender-page/NextButton";

const GenderPage = () => {
  return (
    <Flex position={"relative"} h={"calc(100svh - 58px)"}>
      <NextButton />
    </Flex>
  );
};

export default GenderPage;
