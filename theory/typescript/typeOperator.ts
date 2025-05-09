// union type (|) [합집합]
const a2: number | string = 100;

// 타입 알리아스
type Icecream = { icecream: string; price?: number; kcal?: number };
const b2: Icecream = {
  icecream: "아이스크림",
};

// Person 정의 이름, 나이
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
