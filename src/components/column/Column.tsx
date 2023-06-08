import { ISize } from "../../types/ISize";
import { repeat } from "../../utils/repeat";
import { Element } from "../element/Element";
import styles from "./Column.module.css";

export const Column: React.FC<{ size: ISize; y: number }> = (props) => {
  const styleProps = {
    height: `${100 / props.size.y}%`,
  };

  const items = () =>
    repeat(props.size.x, (index) => (
      <Element key={`${index},${props.y}`} size={props.size} x={index} y={props.y} />
    ));

  return (
    <div className={styles.column} style={styleProps}>
      {items()}
    </div>
  );
};
