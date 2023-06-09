import { useId } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const inputId = useId();

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onValueChanged?.(event.target.value);

  return (
    <>
      <div>
        <label htmlFor={inputId}>{props.label}</label>
      </div>
      <input
        id={inputId}
        type={props.type}
        value={props.value}
        onChange={onValueChange}
      />
    </>
  );
};
