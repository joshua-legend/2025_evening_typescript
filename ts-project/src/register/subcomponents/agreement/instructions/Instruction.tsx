export type InstructionProps = { required: "mandantory" | "option"; instruction: string };

export type InstructionComponetProps = Omit<InstructionProps, "required"> & Partial<Pick<InstructionProps, "required">>;

const Instruction = ({ required, instruction }: InstructionComponetProps) => {
  const requiredObj = {
    mandantory: "[필수]",
    option: "[선택]",
    no: "",
  };
  return (
    <span>
      {requiredObj[required || "no"]} {instruction}
    </span>
  );
};

export default Instruction;
