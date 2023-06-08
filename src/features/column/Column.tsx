import { repeat } from "../../utils/repeat";
import { Element } from "../element/Element";
import styles from "./Column.module.css";
import { IColumnProps } from "./IColumnProps";

export const Column: React.FC<IColumnProps> = (props) => {
  const styleProps = {
    height: `${100 / props.config.gridSize.height}%`,
  };

  const items = () =>
    repeat(props.config.gridSize.width, (index) => (
      <Element
        key={`${index},${props.y}`}
        config={props.config}
        x={index}
        y={props.y}
      />
    ));

  return (
    <div className={styles.column} style={styleProps}>
      {items()}
    </div>
  );
};
