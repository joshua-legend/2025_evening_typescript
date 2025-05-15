import { InstructionProps } from "./Instruction";

type TitleInstructionComponetProps = Pick<InstructionProps, "instruction">;

const TitleInstruction = ({ instruction }: TitleInstructionComponetProps) => {
  return <span className="font-bold text-xl">{instruction}</span>;
};

export default TitleInstruction;
