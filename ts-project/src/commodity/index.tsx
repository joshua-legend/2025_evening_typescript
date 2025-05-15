import React from "react";
import NationSelect from "./subcommponents/NationSelect";
import TypeSelect from "./subcommponents/TypeSelect";

const Commodity = () => {
  const data = [{ nation: "일본", type: ["패키지", "자유"] }];

  return (
    <>
      <NationSelect />
      <TypeSelect />
    </>
  );
};

export default Commodity;
