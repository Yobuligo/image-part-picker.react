import { ReactNode, useId } from "react";
import { EnumType } from "../../types/EnumType";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const partListId = useId();
  const widthId = useId();
  const heightId = useId();

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
      <div>
        <label htmlFor={widthId}>Grid Width</label>
      </div>
      <input id={widthId} type="number"/>
      <div>
        <label htmlFor={heightId}>Grid Height</label>
      </div>
      <input id={heightId} type="number" />
      <div>
        <label htmlFor={partId}>Part</label>
      </div>
      <input id={partId} type="" list={partListId} />
      <datalist id={partListId}>{items()}</datalist>
    </div>
  );
}
