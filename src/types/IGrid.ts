export interface IGrid<T> {
  find(x: number, y: number): T | undefined;
  set(x: number, y: number, value: T): void;
  setAll(value: T): void;
}
