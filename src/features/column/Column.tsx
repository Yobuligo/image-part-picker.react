import { useContext } from "react";
import { ImagePartPickerContext } from "../../components/imagePartPicker/context/ImagePartPickerContext";
import { repeat } from "../../components/imagePartPicker/utils/repeat";
import { Element } from "../element/Element";
import styles from "./Column.module.css";
import { IColumnProps } from "./IColumnProps";

export const Column: React.FC<IColumnProps> = (props) => {
  const context = useContext(ImagePartPickerContext);

  const styleProps = {
    height: `${100 / context.gridHeight.value}%`,
  };

  const items = () =>
    repeat(context.gridWidth.value, (index) => (
      <Element
        {...props}
        key={`${index},${props.y}`}
        config={props.config}
        coordinate={{ x: index, y: props.y }}
      />
    ));

  return (
    <div className={styles.column} style={styleProps}>
      {items()}
    </div>
  );
};
