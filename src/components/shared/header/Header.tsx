import { Box, Flex, Heading } from "@chakra-ui/react";
import { HiOutlineMenuAlt3, HiHome } from "react-icons/hi";

const Header = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Box as={HiHome} fontSize={"1.5rem"}></Box>

      <Heading textAlign={"center"} as={"h1"} fontSize={"1.5rem"}>
        pages
      </Heading>

      <Box as={HiOutlineMenuAlt3} fontSize={"1.5rem"}></Box>
    </Flex>
  );
};

export default Header;
