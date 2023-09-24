import { useContext, useMemo } from "react";
import { ImagePartPickerContext } from "../../context/ImagePartPickerContext";
import { CoordinateTracker } from "../../services/CoordinateTracker";
import { EnumType } from "../../types/EnumType";
import { ICoordinate } from "../../types/ICoordinate";
import { IGridConfig } from "../../types/IGridConfig";
import { repeat } from "../../utils/repeat";
import { Column } from "../column/Column";
import { IImagePartGridProps } from "./IImagePartGridProps";
import styles from "./ImagePartGrid.module.css";

export function ImagePartGrid<T extends EnumType>(
  props: IImagePartGridProps<T>
) {
  const context = useContext(ImagePartPickerContext);
  const coordinateTracker = useMemo(() => {
    const coordinateTracker = new CoordinateTracker<T>();

    // fill CoordinateTracker
    const gridConfig: IGridConfig<T> = {
      data: new Map<T[keyof T], ICoordinate[]>(),
      setWidth: context.grid.setWidth,
      setHeight: context.grid.setHeight,
    };
    const gridConfigData = props.gridConfig(gridConfig).data;
    coordinateTracker.fill(gridConfigData);
    return coordinateTracker;
  }, [context.grid.setHeight, context.grid.setWidth, props]);

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
