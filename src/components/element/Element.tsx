import { useToggle } from "../../hooks/useToggle";
import { ISize } from "../../types/ISize";
import styles from "./Element.module.css";

export const Element: React.FC<{ size: ISize; x: number; y: number }> = (
  props
) => {
  const [highlighted, toggleHighlighted] = useToggle(false);
  const styleProps = {
    width: `${100 / props.size.x}%`,
  };
  return (
    <div
      className={`${styles.element} ${highlighted ? styles.highlighted : ""}`}
      style={styleProps}
      onClick={() => {
        toggleHighlighted();
        console.log(`Element (${props.x + 1}, ${props.y + 1}) was clicked`);
      }}
    ></div>
  );
};
