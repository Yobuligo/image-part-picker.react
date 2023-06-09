import { ReactNode, useContext, useId } from "react";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { EnumType } from "../../types/EnumType";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const partListId = useId();
  const widthId = useId();
  const heightId = useId();
  const context = useContext(AppContext);

  const items = () => {
    const children: ReactNode[] = [];
    for (let key in props.options) {
      if (!parseInt(key)) {
        children.push(<option value={key} />);
      }
    }
    return children;
  };

  const onChangeGridWidth = (newValue: string) =>
    context.gridWidth.setValue(+newValue);

  const onChangeGridHeight = (event: React.ChangeEvent<HTMLInputElement>) =>
    context.gridHeight.setValue(+event.target.value);

  return (
    <div className={styles.designMode}>
      <LabeledInput
        label="Grid With"
        type="number"
        value={context.gridWidth.value}
        onValueChanged={onChangeGridWidth}
      />
      <div>
        <label htmlFor={heightId}>Grid Height</label>
      </div>
      <input
        id={heightId}
        type="number"
        value={context.gridHeight.value}
        onChange={onChangeGridHeight}
      />
      <div>
        <label htmlFor={partId}>Part</label>
      </div>
      <input id={partId} type="" list={partListId} />
      <datalist id={partListId}>{items()}</datalist>
    </div>
  );
}
