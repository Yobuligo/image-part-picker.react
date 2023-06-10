import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { repeat } from "../../utils/repeat";
import { Element } from "../element/Element";
import styles from "./Column.module.css";
import { IColumnProps } from "./IColumnProps";

export const Column: React.FC<IColumnProps> = (props) => {
  const context = useContext(AppContext);

  const styleProps = {
    height: `${100 / context.gridHeight.value}%`,
  };

  const items = () =>
    repeat(context.gridWidth.value, (index) => (
      <Element
        key={`${index},${props.y}`}
        config={props.config}
        coordinate={[index, props.y]}
        onActivate={props.onActivate}
        onDeactivate={props.onDeactivate}
      />
    ));

  return (
    <div className={styles.column} style={styleProps}>
      {items()}
    </div>
  );
};
