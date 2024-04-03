import { usePageStore } from "@/app/providers";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <>
      <button onClick={() => nextPage()}>next page</button>
    </>
  );
};

export default StartPage;
