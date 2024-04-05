export type THumanBody = {
  width: number;
  height: number;
  color: string;
};

export type TBodyData = {
  gender: string | null;
  weight: number | null;
  height: number | null;
  result: number | null;
};

export type THumanBodyState = {
  bodyData: Partial<TBodyData>;
  setBodyData: (add: Partial<TBodyData>) => void;
};
