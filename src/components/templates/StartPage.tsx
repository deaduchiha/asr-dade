import { usePageStore } from "@/app/providers";
import { Button } from "@chakra-ui/react";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <>
      <Button onClick={() => nextPage()}>next page</Button>
    </>
  );
};

export default StartPage;
