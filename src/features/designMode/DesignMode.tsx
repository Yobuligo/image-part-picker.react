import { useContext, useId, useMemo, useState } from "react";
import { LabeledInput } from "../../components/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
import { Enum } from "../../utils/Enum";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const [selectedPart, setSelectedPart] = useState<T[keyof T]>(
    Enum.first(props.options)
  );
  const context = useContext(AppContext);

  const items = useMemo(
    () =>
      Enum.keys(props.options).map((option) => (
        <option key={option.toString()}>{option.toString()}</option>
      )),
    [props.options]
  );

  const onChangeGridWidth = (newValue: string) =>
    context.gridWidth.setValue(+newValue);

  const onChangeGridHeight = (newValue: string) =>
    context.gridHeight.setValue(+newValue);

  const onActivate: ElementChangeObserver = (coordinate) =>
    props.coordinateTracker.add(selectedPart, coordinate);

  const onDeactivate: ElementChangeObserver = (coordinate) =>
    props.coordinateTracker.remove(coordinate);

  props.refOnActivate(onActivate);
  props.refOnDeactivate(onDeactivate);

  const onSelectPart = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPart(event.target.value as T[keyof T]);
    context.grid.setAll(false);
  };

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
      <select name={partId} id={partId} onChange={onSelectPart}>
        {items}
      </select>
    </div>
  );
}
