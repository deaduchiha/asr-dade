import NavigationCard from "@/components/elements/navigation/NavigationCard";
import { Flex } from "@chakra-ui/react";
import {
  FaUserCircle,
  FaChartBar,
  FaShoppingCart,
  FaHome,
} from "react-icons/fa";

import { IoBodySharp } from "react-icons/io5";

const Navigation = () => {
  const data = [
    { id: 1, title: "profile", icon: FaUserCircle },
    { id: 2, title: "chart", icon: FaChartBar },
    { id: 3, title: "", icon: IoBodySharp },
    { id: 4, title: "shop", icon: FaShoppingCart },
    { id: 5, title: "home", icon: FaHome },
  ];
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
      justifyContent={"space-around"}
    >
      <NavigationCard data={data} />
    </Flex>
  );
};

export default Navigation;
