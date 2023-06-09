import { useState } from "react";

export const useToggle = (
  initialValue: boolean
): [value: boolean, toggle: (newValue?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = (newValue?: boolean) => {
    if (newValue !== undefined) {
      setValue(newValue);
    } else {
      setValue((previous) => !previous);
    }
  };

  return [value, toggle];
};
