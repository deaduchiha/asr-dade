import { usePageStore } from "@/app/providers";
import { PAGES } from "@/types/pages";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { HiOutlineMenuAlt3, HiHome } from "react-icons/hi";

const Header = () => {
  const { page } = usePageStore((state) => state);

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} p={3}>
      <Box as={HiHome} fontSize={"1.5rem"}></Box>

      <Heading textAlign={"center"} as={"h1"} fontSize={"1.5rem"}>
        {PAGES[page]}
      </Heading>

      <Box as={HiOutlineMenuAlt3} fontSize={"1.5rem"}></Box>
    </Flex>
  );
};

export default Header;
