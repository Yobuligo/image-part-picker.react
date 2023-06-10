import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { style } from "../../utils/style";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const context = useContext(AppContext);
  const highlighted = context.grid.find(
    props.coordinate.x,
    props.coordinate.y
  );
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
        context.grid.set(
          props.coordinate.x,
          props.coordinate.y,
          (previous) => {
            if (!previous) {
              props.onActivate?.(props.coordinate);
            } else {
              props.onDeactivate?.(props.coordinate);
            }
            return !previous;
          }
        );
      }}
    ></div>
  );
};
