import { Box, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

const NavButton = ({ icon }: { icon: IconType }) => {
  return (
    <Flex
      className="test"
      bg={"#f8f9fa"}
      pos={"relative"}
      top={"-50px"}
      borderRadius={"100%"}
      w={"80px"}
      h={"80px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        pos={"absolute"}
        left={"-13px"}
        bottom={"25px"}
        w={"15px"}
        h={"15px"}
        bg={"#fff"}
        borderRadius={"0px 15px 0px 0px"}
        boxShadow={"3px -4px 0 #f8f9fa"}
      />

      <Box
        pos={"absolute"}
        right={"-13px"}
        bottom={"25px"}
        w={"15px"}
        h={"15px"}
        bg={"#fff"}
        borderRadius={"15px 0px 0 0px"}
        boxShadow={"-3px -4px 0 #f8f9fa"}
      />
      <Box
        bg={"#2d6a4f"}
        p={2}
        borderRadius={"100%"}
        transition={"0.3s"}
        // borderBottomLeftRadius={5}
        _hover={{ borderBottomLeftRadius: 5 }}
      >
        <Box as={icon} fontSize={"1.7rem"} color={"#fff"} />
      </Box>
    </Flex>
  );
};

export default NavButton;
