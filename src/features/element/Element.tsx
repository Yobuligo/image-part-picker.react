import { useContext } from "react";
import { ImagePartPickerContext } from "../../components/imagePartPicker/context/ImagePartPickerContext";
import { style } from "../../utils/style";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(ImagePartPickerContext);
  const highlighted = context.grid.find(props.coordinate);
  const styleProps = {
    width: `${100 / context.gridWidth.value}%`,
  };

  return (
    <div
      className={`${
        props.config.designMode &&
        style(styles.element, highlighted && styles.highlighted)
      }`}
      style={styleProps}
      onClick={() => {
        context.grid.set(props.coordinate, (previous) => {
          if (!previous) {
            props.onActivate?.(props.coordinate);
          } else {
            props.onDeactivate?.(props.coordinate);
          }
          props.onClick(props.coordinate);
          return !previous;
        });
      }}
    ></div>
  );
};
