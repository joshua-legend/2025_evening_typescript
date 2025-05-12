// union type (|) [합집합]
const a2: number | string = 100;

// 타입 알리아스
type Icecream = { icecream: string; price?: number; kcal?: number };
const b2: Icecream = {
  icecream: "아이스크림",
};

// intersection type (&) [교집합]
type Person = { name: string; age: number };
type Colleger = { major: string; grade: number };
type Worker_ = { position: string; wage: number };
type ChungChuen = Person & Colleger & Worker_;

const taejin: ChungChuen = {
  age: 25,
  grade: 4,
  major: "컴공",
  name: "태지니",
  position: "알바생",
  wage: 10000,
};

type Dessert = "cookie" | "icecream" | "coffee";
type A = Exclude<Dessert, "cookie">;
type B = Extract<Dessert, "icecream">;
const test50: A = "icecream";
const test51: B = "icecream";

type Coffee = { name: string; price: number; kcal?: number };

// 함수타입 알리아스
type Hello = (name: string) => string;

const sayHello: Hello = (name) => `${name} 안녕!`;
