export const checkNotNull = <T>(value: T): NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error("Value must not be null.");
  }
  return value;
};
