import { useCallback, useEffect, useState } from "react";

type Row<T> = (T | undefined)[];

export const useGrid = <T>(width: number, height: number) => {
  const [data, setData] = useState<Row<T>[]>([]);

  const find = (x: number, y: number): T | undefined => {
    return data[x][y];
  };

  const reset = useCallback(() => {
    setData(() => {
      const data = [];
      for (let x = 0; x < width; x++) {
        const row: Row<T> = [];
        for (let y = 0; y < height; y++) {
          row.push(undefined);
        }
        data.push(row);
      }
      return data;
    });
  }, [width, height]);

  const set = (x: number, y: number, value: T) => {
    setData((previous) => {
      previous[x][y] = value;
      return previous;
    });
  };

  useEffect(() => reset(), [reset]);

  return [find, reset, set];
};
