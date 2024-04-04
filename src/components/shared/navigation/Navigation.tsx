import { Button, Flex } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Flex
      pos={"absolute"}
      bottom={"0svh"}
      right={0}
      left={0}
      w={"full"}
      h={"100px"}
      bg={"#ffffff"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {["profile", "chart", "start", "shop", "home"].map((d, index) =>
        d !== "start" ? (
          <Button key={index}>{d}</Button>
        ) : (
          <Button alignSelf={"flex-start"} key={d} top={-4} pos={"relative"}>
            {d}
          </Button>
        )
      )}
    </Flex>
  );
};

export default Navigation;
