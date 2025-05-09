//annotate: 명시하다

// 기본: number, string, boolean, undefined, null
const a: string = String(100);
const b: number = 10;
const c: boolean = !!1;

// 참조: array, object
const d: number[] = [1, 2, 3, 4, 5];
const e: boolean[] = [false];

const props: { text: string } = { text: "네모네모" };

const f: { name: string; price: number } = {
  name: "아메리카노",
  price: 2000,
};

// 이름,나이 오브젝트 배열
const people: { name: string; age: number }[] = [
  { name: "정서령", age: 20 },
  { name: "김서령", age: 21 },
];

const test: {
  name: string;
  price: number;
  ingrident: string[];
}[] = [
  { name: "쿠키", price: 2500, ingrident: ["밀가루", "설탕"] },
  { name: "달고나", price: 3500, ingrident: ["소다", "설탕"] },
];

const add = (a: number, b: number) => a + b;
