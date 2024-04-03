import { usePageStore } from "@/app/providers";

const HeightPage = () => {
  const { nextPage } = usePageStore((state) => state);

  return (
    <div>
      <button onClick={() => nextPage()}>plus</button>
    </div>
  );
};

export default HeightPage;
