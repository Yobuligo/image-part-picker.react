import { useToggle } from "../../hooks/useToggle";
import { style } from "../../utils/style";
import styles from "./Element.module.css";
import { IElement } from "./IElement";

export const Element: React.FC<IElement> = (props) => {
  const [highlighted, toggleHighlighted] = useToggle(false);
  const styleProps = {
    width: `${100 / props.config.gridSize.width}%`,
  };

  return (
    <div
      className={`${
        props.config.designMode &&
        style(styles.element, highlighted && styles.highlighted)
      }`}
      style={styleProps}
      onClick={() => {
        toggleHighlighted();
        console.log(`Element (${props.x + 1}, ${props.y + 1}) was clicked`);
      }}
    ></div>
  );
};
