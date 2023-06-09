import { useContext } from "react";
import image from "../../assets/person.png";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver as ElementToggleObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
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

  const items = () =>
    repeat(context.gridHeight.value, (index) => (
      <Column
        key={index}
        config={props.config}
        y={index}
        onActivate={(coordinate) => onActivateObserver?.(coordinate)}
        onDeactivate={(coordinate) => onDeactivateObserver?.(coordinate)}
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
