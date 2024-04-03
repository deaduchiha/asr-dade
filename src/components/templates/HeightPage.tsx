import { usePageStore } from "@/app/providers";

const HeightPage = () => {
  const { nextPage, prevPage } = usePageStore((state) => state);

  return (
    <>
      <button onClick={() => nextPage()}>next page</button>
      <br />
      <button onClick={() => prevPage()}>prev page</button>
    </>
  );
};

export default HeightPage;
