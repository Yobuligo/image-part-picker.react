import { useCallback, useEffect, useState } from "react";
import { ICoordinate } from "../types/ICoordinate";
import { IGrid } from "../types/IGrid";

type Row<T> = (T | undefined)[];

export const useGrid = <T>(
  initialWidth: number,
  initialHeight: number,
  initialValue: T
): IGrid<T> => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [data, setData] = useState<Row<T>[]>([]);

  const find = useCallback(
    (coordinate: ICoordinate): T | undefined =>
      data?.[coordinate.x]?.[coordinate.y],
    [data]
  );

  const setValue = useCallback(
    (coordinate: ICoordinate, value: T) => {
      if (coordinate.x < 0 || coordinate.x > width) {
        throw new Error(
          `Error when setting value. X coordinate is out of bounce. X must be between '0' and '${width}'`
        );
      }

      if (coordinate.y < 0 || coordinate.y > height) {
        throw new Error(
          `Error when setting value. Y coordinate is out of bounce. Y must be between '0' and '${height}'`
        );
      }

      setData((previous) => {
        previous[coordinate.x][coordinate.y] = value;
        return [...previous];
      });
    },
    [width, height]
  );

  const set = useCallback(
    (coordinate: ICoordinate, setter: (previous: T | undefined) => T) =>
      setValue(coordinate, setter(find(coordinate))),
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

  const setByCoordinates = (coordinates: ICoordinate[], value: T) => {
    setData((previous) => {
      coordinates.forEach((coordinate) => {
        previous[coordinate.x][coordinate.y] = value;
      });
      return [...previous];
    });
  };

  useEffect(() => {
    setAll(initialValue);
  }, [initialValue, setAll]);

  return { find, set, setAll, setByCoordinates, setWidth, setHeight };
};
