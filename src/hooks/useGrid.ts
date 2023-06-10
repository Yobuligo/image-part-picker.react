import { useCallback, useEffect, useState } from "react";
import { IGrid } from "../types/IGrid";

type Row<T> = (T | undefined)[];

export const useGrid = <T>(
  width: number,
  height: number,
  initialValue: T
): IGrid<T> => {
  const [data, setData] = useState<Row<T>[]>([]);

  const find = useCallback(
    (x: number, y: number): T | undefined => data?.[x]?.[y],
    [data]
  );

  const setValue = useCallback(
    (x: number, y: number, value: T) => {
      if (x < 0 || x > width) {
        throw new Error(
          `Error when setting value. X coordinate is out of bounce. X must be between '0' and '${width}'`
        );
      }

      if (y < 0 || y > height) {
        throw new Error(
          `Error when setting value. Y coordinate is out of bounce. Y must be between '0' and '${height}'`
        );
      }

      setData((previous) => {
        previous[x][y] = value;
        return [...previous];
      });
    },
    [width, height]
  );

  const set = useCallback(
    (x: number, y: number, setter: (previous: T | undefined) => T) =>
      setValue(x, y, setter(find(x, y))),
    [find, setValue]
  );

  const setAll = useCallback(
    (value: T) => {
      setData(() => {
        const data = [];
        for (let x = 0; x < width; x++) {
          const row: Row<T> = [];
          for (let y = 0; y < height; y++) {
            row.push(value);
          }
          data.push(row);
        }
        return data;
      });
    },
    [width, height]
  );

  useEffect(() => {
    setAll(initialValue);
  }, [initialValue, setAll]);

  return { find, set, setAll };
};
