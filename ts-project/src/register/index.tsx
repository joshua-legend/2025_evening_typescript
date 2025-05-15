"use client";
import { useState } from "react";
import Agreement, { AgreementProps } from "./subcomponents/agreement/Agreement";
import Next from "./subcomponents/Next/Next";
import RoundChecker from "./subcomponents/agreement/checkers/RoundChecker";
import TitleInstruction from "./subcomponents/agreement/instructions/TitleInstruction";

type Agreement = { isMandantory: boolean } & AgreementProps;

const Register = () => {
  const [agreements, setAgreement] = useState<Agreement[]>([
    { isMandantory: false, isChecked: false, instruction: "만 14세 이상입니다.", handleClick: () => handleClickTest(0) },
    { isMandantory: true, isChecked: false, instruction: "이용약관, 개인정보 수집/이용", required: "mandantory", handleClick: () => handleClickTest(1) },
    { isMandantory: false, isChecked: false, instruction: "위치 기반 서비스 이용", required: "option", handleClick: () => handleClickTest(2) },
    { isMandantory: false, isChecked: false, instruction: "홍보성 정보 수신", required: "option", handleClick: () => handleClickTest(3) },
    { isMandantory: true, isChecked: false, instruction: "정체성 어쩌구 저쩌구", required: "mandantory", handleClick: () => handleClickTest(4) },
    { isMandantory: false, isChecked: false, instruction: "냥냥이 정권 진출", required: "option", handleClick: () => handleClickTest(5) },
    { isMandantory: true, isChecked: false, instruction: "댕댕이 복지 혜택", required: "mandantory", handleClick: () => handleClickTest(6) },
    { isMandantory: true, isChecked: false, instruction: "분좋카 나들이 쿠폰이용", required: "mandantory", handleClick: () => handleClickTest(7) },
  ]);

  const handleClickAll = () =>
    setAgreement((prev) => {
      const isAlltrue = agreements.every((v) => v.isChecked);
      const newPrev = [...prev].map((v) => ({ ...v, isChecked: isAlltrue ? false : true }));
      return newPrev;
    });

  const handleClickTest = (num: number) => {
    setAgreement((prev) => [...prev].map((v, i) => (num == i ? { ...v, isChecked: !v.isChecked } : v)));
  };

  return (
    <div>
      <div className="flex gap-1">
        <TitleInstruction instruction="전체동의" />
        <RoundChecker isChecked={agreements.every((v) => v.isChecked)} handleClick={() => handleClickAll()} />
      </div>
      {agreements.map((v, i) => (
        <Agreement key={i} {...v} />
      ))}
      <Next isPass={agreements.filter((v) => v.isMandantory).every((v) => v.isChecked)} />
    </div>
  );
};

export default Register;
// commodity
