// generalize: 일반화하다.
// generic.ts

type User1<T> = {
  name: string;
  age: number;
  gender: "male" | "female";
  something: T;
};

const kim1: User1<string> = {
  name: "김자스",
  age: 22,
  gender: "female",
  something: "라면",
};
