import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { useToggle } from "../../hooks/useToggle";
import { style } from "../../utils/style";
import styles from "./Element.module.css";
import { IElementProps } from "./IElementProps";

export const Element: React.FC<IElementProps> = (props) => {
  const [highlighted, toggleHighlighted] = useToggle(false);
  const context = useContext(AppContext);
  const styleProps = {
    width: `${100 / context.gridWidth.value}%`,
  };

  useEffect(() => {
    if (highlighted) {
      props.onActivate?.(props.coordinate);
    } else {
      props.onDeactivate?.(props.coordinate);
    }
  }, [highlighted, props]);

  return (
    <div
      className={`${
        props.config.designMode &&
        style(styles.element, highlighted && styles.highlighted)
      }`}
      style={styleProps}
      onClick={() => {
        toggleHighlighted();
      }}
    ></div>
  );
};
