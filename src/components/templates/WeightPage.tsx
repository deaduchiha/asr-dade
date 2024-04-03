import { usePageStore } from "@/app/providers";

const WeightPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <>
      <button onClick={() => nextPage()}>plus</button>
    </>
  );
};

export default WeightPage;
