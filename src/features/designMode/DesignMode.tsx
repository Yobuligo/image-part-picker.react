import { useContext, useId, useMemo, useState } from "react";
import { LabeledInput } from "../../components/LabeledInput";
import { AppContext } from "../../context/AppContext";
import { ElementChangeObserver } from "../../types/ElementToggleObserver";
import { EnumType } from "../../types/EnumType";
import { Enum } from "../../utils/Enum";
import { CodeGenerator } from "../../utils/codeGenerator/CodeGenerator";
import styles from "./DesignMode.module.css";
import { IDesignModeProps } from "./IDesignModeProps";

export function DesignMode<T extends EnumType>(props: IDesignModeProps<T>) {
  const partId = useId();
  const textAreaId = useId();
  const [selectedPart, setSelectedPart] = useState<T[keyof T]>(
    Enum.first(props.enumType)
  );
  const context = useContext(AppContext);
  const [code, setCode] = useState("");

  const codeGenerator = useMemo(
    () => new CodeGenerator<T>(props.enumName),
    [props.enumName]
  );

  const items = useMemo(
    () =>
      Enum.keys(props.enumType).map((option) => (
        <option key={option.toString()}>{option.toString()}</option>
      )),
    [props.enumType]
  );

  const onChangeGridWidth = (newValue: string) =>
    context.gridWidth.setValue(+newValue);

  const onChangeGridHeight = (newValue: string) =>
    context.gridHeight.setValue(+newValue);

  const onActivate: ElementChangeObserver = (coordinate) => {
    props.coordinateTracker.add(selectedPart, coordinate);
    setCode(codeGenerator.generate(props.coordinateTracker));
  };

  const onDeactivate: ElementChangeObserver = (coordinate) => {
    props.coordinateTracker.remove(coordinate);
    setCode(codeGenerator.generate(props.coordinateTracker));
  };

  props.refOnActivate(onActivate);
  props.refOnDeactivate(onDeactivate);

  const onSelectPart = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedPart = event.target.value as T[keyof T];
    setSelectedPart(newSelectedPart);
    const coordinates = props.coordinateTracker.findByPart(newSelectedPart);
    context.grid.setAll(false);
    context.grid.setByCoordinates(coordinates, true);
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
      <div>
        <label htmlFor={textAreaId}>Generated Code</label>
      </div>
      <div>
        <textarea
          name={textAreaId}
          id={textAreaId}
          cols={50}
          rows={20}
          defaultValue={code}
        />
      </div>
    </div>
  );
}
