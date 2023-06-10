import { useContext, useEffect, useMemo } from "react";
import image from "../../assets/person.png";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver as ElementToggleObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
import { ICoordinate } from "../../types/ICoordinate";
import { CoordinateTracker } from "../../utils/coordinateTracker/CoordinateTracker";
import { repeat } from "../../utils/repeat";
import { style } from "../../utils/style";
import { Column } from "../column/Column";
import { DesignMode } from "../designMode/DesignMode";
import { IImageProps } from "./IImageProps";
import styles from "./Image.module.css";

export function Image<T extends EnumType>(props: IImageProps<T>) {
  const context = useContext(AppContext);
  let onActivateObserver: ElementToggleObserver;
  let onDeactivateObserver: ElementToggleObserver;
  const coordinateTracker = useMemo(() => new CoordinateTracker<T>(), []);

  const gridData = useMemo(() => {
    const data: Map<T[keyof T], ICoordinate[]> = new Map();
    return props.gridData(data);
  }, [props]);

  useEffect(() => {
    gridData.forEach((coordinates, key) =>
      coordinates.forEach((coordinate) =>
        coordinateTracker.add(key, coordinate)
      )
    );
  }, [coordinateTracker, gridData]);

  const items = () =>
    repeat(context.gridHeight.value, (index) => (
      <Column
        key={index}
        config={props.config}
        y={index}
        onActivate={(coordinate) => {
          if (props.config.designMode) {
            onActivateObserver?.(coordinate);
          } else {
            const part = coordinateTracker.findByCoordinate(coordinate);
            if (part) {
              props.onSelect(part);
            }
          }
        }}
        onDeactivate={(coordinate) => {
          onDeactivateObserver?.(coordinate);
        }}
      />
    ));

  return (
    <div className={styles.imageFrame}>
      <div className={styles.image}>
        <img src={image} alt="Person" />
        <div
          className={style(
            styles.imageComponent,
            props.config.designMode && styles.imageComponentBorder
          )}
        >
          {items()}
        </div>
      </div>
      {props.config.designMode && (
        <div>
          <DesignMode
            coordinateTracker={coordinateTracker}
            enumName={props.enumName}
            enumType={props.enumType}
            refOnActivate={(elementToggleObserver) =>
              (onActivateObserver = elementToggleObserver)
            }
            refOnDeactivate={(elementToggleObserver) =>
              (onDeactivateObserver = elementToggleObserver)
            }
          />
        </div>
      )}
    </div>
  );
}
