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
      return previous;
    });
  };

  useEffect(() => reset(), [reset]);

  return [find, reset, set];
};
