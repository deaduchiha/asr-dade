import { usePageStore } from "@/app/providers";

const GenderPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);

  return (
    <>
      <button onClick={() => nextPage()}>next page</button>
      <br />
      <button onClick={() => prevPage()}>prev page</button>
    </>
  );
};

export default GenderPage;
