import { useContext, useEffect, useMemo } from "react";
import image from "../../assets/person.png";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver as ElementToggleObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
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

  useEffect(() => {
    props.gridData.forEach((coordinates, key) =>
      coordinates.forEach((coordinate) =>
        coordinateTracker.add(key, coordinate)
      )
    );
  }, [coordinateTracker, props.gridData]);

  const items = () =>
    repeat(context.gridHeight.value, (index) => (
      <Column
        key={index}
        config={props.config}
        y={index}
        onActivate={(coordinate) => {
          onActivateObserver?.(coordinate);
          const part = coordinateTracker.findByCoordinate(coordinate);
          if (part) {
            props.onSelect(props.options[part]);
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
            options={props.options}
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
