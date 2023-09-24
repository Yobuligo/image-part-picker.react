import { useContext } from "react";
import { IElementProps } from "./IElementProps";
import { ImagePartPickerContext } from "../../context/ImagePartPickerContext";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(ImagePartPickerContext);
  const styleProps = {
    width: `${100 / context.gridWidth.value}%`,
  };

  return (
    <div
      style={styleProps}
      onClick={() => props.onClick(props.coordinate)}
    ></div>
  );
};
