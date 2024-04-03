import { usePageStore } from "@/app/providers";

const ResultPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <div>
      <button onClick={() => nextPage()}>plus</button>
    </div>
  );
};

export default ResultPage;
