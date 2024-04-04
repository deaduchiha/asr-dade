import { INavigation } from "@/types/navigation";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import NavButton from "./NavButton";

const NavigationCard = ({ data }: { data: INavigation[] }) => {
  return (
    <>
      {data.map((d: INavigation) => (
        <Stack
          key={d.id}
          alignItems={"center"}
          fontSize={{ base: "1rem", md: "1.8rem" }}
        >
          {d.id === 3 && <NavButton icon={d.icon} />}

          <Box
            display={d.id === 3 ? "none" : "inherit"}
            as={d.icon}
            fontSize={"1.5rem"}
          />
          <Text display={d.id === 3 ? "none" : "inherit"} as="span">
            {d.title}
          </Text>
        </Stack>
      ))}
    </>
  );
};

export default NavigationCard;
