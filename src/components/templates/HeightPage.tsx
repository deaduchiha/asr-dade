import { usePageStore } from "@/app/providers";
import { useHumanBodyData } from "@/stores/human";
import { Button, Flex } from "@chakra-ui/react";

const HeightPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);
  const { bodyData } = useHumanBodyData();

  console.log(bodyData);

  return (
    <Flex>
      <Button onClick={() => nextPage()}>next page</Button>

      <Button onClick={() => prevPage()}>prev page</Button>
    </Flex>
  );
};

export default HeightPage;
