export enum Gender {
  MALE = "male",
  FEMALE = "female",
}

export type TBody = {
  gender: Gender;
  height: number;
  weight: number;
};
