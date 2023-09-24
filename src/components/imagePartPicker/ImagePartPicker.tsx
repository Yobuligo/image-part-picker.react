import { useContext, useMemo } from "react";
import image from "../../assets/person.png";
import { IImagePartPickerProps } from "./IImagePartPickerProps";
import styles from "./ImagePartPicker.module.css";
import { ImagePartPickerContext } from "./context/ImagePartPickerContext";
import { Column } from "./features/column/Column";
import { EnumType } from "./types/EnumType";
import { ICoordinate } from "./types/ICoordinate";
import { CoordinateTracker } from "./utils/coordinateTracker/CoordinateTracker";
import { repeat } from "./utils/repeat";

export function ImagePartPicker<T extends EnumType>(
  props: IImagePartPickerProps<T>
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
        <img src={image} alt="Person" />
        <div className={styles.imageComponent}>{items()}</div>
      </div>
    </div>
  );
}