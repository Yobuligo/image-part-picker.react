export interface IValue<T> {
  value: T;
  setValue(newValue: T): void;
}
