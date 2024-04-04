import { INavigation } from "@/types/navigation";
import { Box, Stack, Text } from "@chakra-ui/react";
import NavButton from "./NavButton";

const NavigationCard = ({ data }: { data: INavigation[] }) => {
  return (
    <>
      {data.map((d: INavigation) => (
        <Stack
          key={d.id}
          alignItems={"center"}
          fontSize={{ base: "1rem", md: "1.8rem" }}
          color={"gray"}
        >
          {renderNavigationItem(d)}
        </Stack>
      ))}
    </>
  );
};

const renderNavigationItem = (item: INavigation) => {
  if (item.id === 3) {
    return <NavButton icon={item.icon} />;
  } else {
    return (
      <>
        <Box
          display={"inherit"}
          as={item.icon}
          color={item.id === 2 ? "purple" : "inherit"}
          fontSize={"1.5rem"}
        />
        <Text color={item.id === 2 ? "purple" : "inherit"} as="span">
          {item.title}
        </Text>
      </>
    );
  }
};

export default NavigationCard;
