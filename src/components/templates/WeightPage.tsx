import { usePageStore } from "@/app/providers";
import { Button, Flex } from "@chakra-ui/react";

const WeightPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);

  return (
    <Flex>
      <Button onClick={() => nextPage()}>next page</Button>

      <Button onClick={() => prevPage()}>prev page</Button>
    </Flex>
  );
};

export default WeightPage;
