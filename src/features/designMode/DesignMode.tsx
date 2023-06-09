import { ReactNode, useContext, useId } from "react";
import { LabeledInput } from "../../components/labeledInput/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const partListId = useId();
  const context = useContext(AppContext);

  const items = () => {
    const children: ReactNode[] = [];
    for (let key in props.options) {
      if (!parseInt(key)) {
        children.push(<option key={key} value={key} />);
      }
    }
    return children;
  };

  const onChangeGridWidth = (newValue: string) =>
    context.gridWidth.setValue(+newValue);

  const onChangeGridHeight = (newValue: string) =>
    context.gridHeight.setValue(+newValue);

  const onActivate: ElementChangeObserver = (coordinate) => {
    console.log(`Element ${coordinate} was activated`);
  };

  const onDeactivate: ElementChangeObserver = (coordinate) => {
    console.log(`Element ${coordinate} was deactivated`);
  };

  props.refOnActivate(onActivate);
  props.refOnDeactivate(onDeactivate);

  return (
    <div className={styles.designMode}>
      <LabeledInput
        label="Grid With"
        type="number"
        value={context.gridWidth.value}
        onValueChanged={onChangeGridWidth}
      />
      <LabeledInput
        label="Grid Height"
        type="number"
        value={context.gridHeight.value}
        onValueChanged={onChangeGridHeight}
      />
      <div>
        <label htmlFor={partId}>Part</label>
      </div>
      <input id={partId} type="" list={partListId} />
      <datalist id={partListId}>{items()}</datalist>
    </div>
  );
}
