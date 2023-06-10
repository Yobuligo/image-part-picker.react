export interface IGrid<T> {
  find(x: number, y: number): T | undefined;
  reset(): void;
  set(x: number, y: number, value: T): void;
}
