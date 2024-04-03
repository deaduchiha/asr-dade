import { usePageStore } from "@/app/providers";
import { Button } from "@chakra-ui/react";
import Navigation from "@/shared/navigation/Navigation";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <>
      <Button onClick={() => nextPage()}>next page</Button>
      <Navigation />
    </>
  );
};

export default StartPage;
