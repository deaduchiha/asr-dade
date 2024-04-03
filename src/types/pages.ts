export type TPage = {
  page: number;
};

export type TPageActions = {
  nextPage: () => void;
  prevPage: () => void;
};

export enum PAGES {
  "HOME",
  "GENDER",
  "WEIGHT",
  "HEIGHT",
  "RESULT",
}

export type TPageStore = TPage & TPageActions;
