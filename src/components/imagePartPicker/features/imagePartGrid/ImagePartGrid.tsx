import { useContext, useMemo } from "react";
import { ImagePartPickerContext } from "../../context/ImagePartPickerContext";
import { EnumType } from "../../types/EnumType";
import { ICoordinate } from "../../types/ICoordinate";
import { CoordinateTracker } from "../../services/CoordinateTracker";
import { repeat } from "../../utils/repeat";
import { Column } from "../column/Column";
import { IImagePartGridProps } from "./IImagePartGridProps";
import styles from "./ImagePartGrid.module.css";

export function ImagePartGrid<T extends EnumType>(
  props: IImagePartGridProps<T>
) {
  const context = useContext(ImagePartPickerContext);
  const coordinateTracker = useMemo(() => new CoordinateTracker<T>(), []);

  const onElementClick = (coordinate: ICoordinate): void => {
    const part = coordinateTracker.findByCoordinate(coordinate);
    if (part !== undefined) {
      props.onSelect?.(part);
    }
  };

  const items = () =>
    repeat(context.gridHeight.value, (index) => (
      <Column key={index} y={index} onClick={onElementClick} />
    ));

  return (
    <div className={styles.imageFrame}>
      <div className={styles.image}>
        {props.image}
        <div className={styles.imageComponent}>{items()}</div>
      </div>
    </div>
  );
}
