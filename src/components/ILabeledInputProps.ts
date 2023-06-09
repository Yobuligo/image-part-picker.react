export interface ILabeledInputProps {
  label: string;
  type: React.HTMLInputTypeAttribute;
  onValueChanged?: (newValue: string) => void;
  value?: string | ReadonlyArray<string> | number | undefined;
}
