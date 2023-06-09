import { useContext, useId, useMemo, useState } from "react";
import { LabeledInput } from "../../components/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
import { Enum } from "../../utils/Enum";
import { CoordinateTracker } from "../../utils/coordinateTracker/CoordinateTracker";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const partListId = useId();
  const [selectedPart, setSelectedPart] = useState<keyof T>(
    Enum.first(props.options)
  );
  const context = useContext(AppContext);
  const coordinateTracker = useMemo(() => new CoordinateTracker<T>(), []);

  const items = () =>
    Enum.keys(props.options).map((option) => (
      <option key={option.toString()} value={option.toString()} />
    ));

  const onChangeGridWidth = (newValue: string) =>
    context.gridWidth.setValue(+newValue);

  const onChangeGridHeight = (newValue: string) =>
    context.gridHeight.setValue(+newValue);

  const onActivate: ElementChangeObserver = (coordinate) => {
    coordinateTracker.add(selectedPart, coordinate);
  };

  const onDeactivate: ElementChangeObserver = (coordinate) => {
    coordinateTracker.remove(coordinate);
  };

  props.refOnActivate(onActivate);
  props.refOnDeactivate(onDeactivate);

  const onSelectPart = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedPart(event.target.value);

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
      <input
        id={partId}
        type=""
        list={partListId}
        value={selectedPart?.toString()}
        onChange={onSelectPart}
      />
      <datalist id={partListId}>{items()}</datalist>
    </div>
  );
}
