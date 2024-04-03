"use client";

import { usePageStore } from "@/app/providers";
import { PAGES } from "@/types/pages";

const HomePage = () => {
  const { page, nextPage, prevPage } = usePageStore((state) => state);

  console.log(PAGES[page]);

  return (
    <>
      <h1>home</h1>
      <p>{PAGES[page]}</p>
      <button onClick={() => nextPage()} disabled={page === 4}>
        plus
      </button>
      <button onClick={() => prevPage()} disabled={page === 0}>
        minus
      </button>
    </>
  );
};

export default HomePage;
