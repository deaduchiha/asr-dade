import { usePageStore } from "@/app/providers";
import { Button, Flex } from "@chakra-ui/react";

const GenderPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);

  return (
    <Flex>
      <Button onClick={() => nextPage()}>next page</Button>
      <Button onClick={() => prevPage()}>prev page</Button>
    </Flex>
  );
};

export default GenderPage;
