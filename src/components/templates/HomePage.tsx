"use client";

import { usePageStore } from "@/app/providers";

import GenderPage from "./GenderPage";
import StartPage from "./StartPage";
import WeightPage from "./WeightPage";
import HeightPage from "./HeightPage";
import ResultPage from "./ResultPage";

const HomePage = () => {
  const { page } = usePageStore((state) => state);

  switch (page) {
    case 0:
      return <StartPage />; // start
    case 1:
      return <GenderPage />; // second page
    case 2:
      return <WeightPage />; // third page
    case 3:
      return <HeightPage />; // fourth page
    case 4:
      return <ResultPage />; // fifth page
  }
};

export default HomePage;
