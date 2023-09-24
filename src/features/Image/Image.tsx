import { useContext, useEffect, useMemo } from "react";
import image from "../../assets/person.png";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver as ElementToggleObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../components/imagePartPicker/types/EnumType";
import { ICoordinate } from "../../components/imagePartPicker/types/ICoordinate";
import { IGridConfig } from "../../components/imagePartPicker/types/IGridConfig";
import { CoordinateTracker } from "../../utils/coordinateTracker/CoordinateTracker";
import { ifTrue } from "../../utils/ifTrue";
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

  const gridConfig: IGridConfig<T> = useMemo(() => {
    if (props.config.designMode) {
      return {
        data: new Map(),
        setWidth: context.grid.setWidth,
        setHeight: context.grid.setHeight,
      };
    } else {
      const data: Map<T[keyof T], ICoordinate[]> = new Map();
      const gridConfig: IGridConfig<T> = {
        data,
        setWidth: context.grid.setWidth,
        setHeight: context.grid.setHeight,
      };
      return props.gridConfig(gridConfig);
    }
  }, [context.grid.setHeight, context.grid.setWidth, props]);

  useEffect(()=>{
    context.grid.setAll(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.config.designMode])

  useEffect(() => {
    gridConfig.data.forEach((coordinates, key) =>
      coordinates.forEach((coordinate) =>
        coordinateTracker.add(key, coordinate)
      )
    );
  }, [coordinateTracker, gridConfig]);

  const onActivate = (coordinate: ICoordinate): void =>
    ifTrue(props.config.designMode, () => onActivateObserver?.(coordinate));

  const onDeactivate = (coordinate: ICoordinate): void => {
    ifTrue(props.config.designMode, () => onDeactivateObserver?.(coordinate));
  };

  const onElementClick = (coordinate: ICoordinate): void => {
    if (!props.config.designMode) {
      const part = coordinateTracker.findByCoordinate(coordinate);
      if (part !== undefined) {
        props.onSelect(part);
      }
    }
  };

  const items = () =>
    repeat(context.gridHeight.value, (index) => (
      <Column
        key={index}
        config={props.config}
        y={index}
        onActivate={onActivate}
        onClick={onElementClick}
        onDeactivate={onDeactivate}
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
