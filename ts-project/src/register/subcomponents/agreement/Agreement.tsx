import Checker, { CheckerProps } from "./checkers/Checker";
import Instruction, { InstructionComponetProps } from "./instructions/Instruction";

export type AgreementProps = InstructionComponetProps & CheckerProps;

const Agreement = (props: AgreementProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Checker {...props} /> <Instruction {...props} />
    </div>
  );
};

export default Agreement;
