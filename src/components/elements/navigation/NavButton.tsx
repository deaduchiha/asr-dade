import { Box, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

import { useAnimateStyleState } from "@/stores/animate-start";
import { usePageStore } from "@/app/providers";
import { StyleKeyframesDefinition, motion } from "framer-motion";
import { useState } from "react";

const NavButton = ({ icon }: { icon: IconType }) => {
  const { setAnimateStyle } = useAnimateStyleState();
  const { nextPage } = usePageStore((state) => state);

  const [animateBorder, setAnimateBorder] = useState({});

  const nextPageHandler = () => {
    setAnimateBorder({
      borderBottomLeftRadius: [0, 0, 100, 100, 100, 100],
      borderTopRightRadius: [100, 100, 0, 0, 100, 100],
      borderTopLeftRadius: [100, 100, 100, 100, 0, 0, 0, 0, 100, 100],
      borderBottomRightRadius: [100, 100, 100, 100, 100, 100, 0, 0, 0, 0, 100],
      scale: [1, 1, 1, 1, 1.5, 1.7, 1.7, 1.7],
      y: [-20, 20, -40, -70, -10, 0, 10, 200],
    });

    setAnimateStyle({
      width: "200px",
      height: "inherit",
      x: 0,
      y: 0,
      opacity: 0,
      transitionDuration: "1s",
    });

    setTimeout(() => {
      nextPage();
    }, 1000);
  };

  return (
    <Flex
      cursor={"pointer"}
      className="test"
      bg={"#f8f9fa"}
      pos={"relative"}
      top={"-50px"}
      borderRadius={"100px"}
      w={"80px"}
      h={"80px"}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={nextPageHandler}
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
      <Flex
        as={motion.div}
        initial={{
          scale: 1,
          borderRadius: "100px 100px 100px 100px",
          width: "unset",
          y: 0,
        }}
        animate={animateBorder}
        bg={"#2d6a4f"}
        p={3}
        transition={"0.6s"}
        justifyContent={"center"}
        _hover={{
          border: "5px solid #257250",
        }}
      >
        <Box as={icon} fontSize={"1.7rem"} color={"#fff"} />
      </Flex>
    </Flex>
  );
};

export default NavButton;
