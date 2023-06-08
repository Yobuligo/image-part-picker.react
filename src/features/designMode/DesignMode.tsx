import { ReactNode, useId } from "react";
import { EnumType } from "../../types/EnumType";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";
import { GridSize } from "./gridSize/GridSize";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const partListId = useId();

  const items = () => {
    const children: ReactNode[] = [];
    for (let key in props.options) {
      if (!parseInt(key)) {
        children.push(<option value={key} />);
      }
    }
    return children;
  };

  return (
    <div className={styles.designMode}>
      <GridSize />
      <label htmlFor={partId}>Part</label>
      <input id={partId} type="" list={partListId} />
      <datalist id={partListId}>{items()}</datalist>
    </div>
  );
}
