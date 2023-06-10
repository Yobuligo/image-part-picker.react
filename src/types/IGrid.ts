export interface IGrid<T> {
  find(x: number, y: number): T | undefined;
  set(x: number, y: number, setter: (previous: T | undefined) => T): void;
  setAll(value: T): void;
}
