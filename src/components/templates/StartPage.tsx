import { usePageStore } from "@/app/providers";

const StartPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <>
      <button onClick={() => nextPage()}>plus</button>
    </>
  );
};

export default StartPage;
