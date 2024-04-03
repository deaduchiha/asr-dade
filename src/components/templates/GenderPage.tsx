import { usePageStore } from "@/app/providers";

const GenderPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);

  return (
    <>
      <button onClick={() => nextPage()}>plus</button>
      <br />
      <button onClick={() => prevPage()}>minus</button>
    </>
  );
};

export default GenderPage;
