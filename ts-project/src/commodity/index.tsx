"use client";

import React, { useState } from "react";
import NationSelect, { Nation } from "./subcommponents/NationSelect";
import TypeSelect, { TypeOptions } from "./subcommponents/TypeSelect";

const Commodity = () => {
  const [data, setData] = useState<{ nation: Nation; type: TypeOptions }[]>([
    { nation: "japan", type: ["package", "free"] },
    { nation: "southeastAsia", type: ["package", "free"] },
    { nation: "taiwanHongKong", type: ["package", "free"] },
    { nation: "china", type: ["package"] },
    { nation: "oceania", type: ["package"] },
    { nation: "europe", type: ["package"] },
  ]);

  return (
    <>
      <NationSelect data={data.map((v) => v.nation)} />
      <TypeSelect data={data.map((v) => v.type)} />
    </>
  );
};

export default Commodity;
