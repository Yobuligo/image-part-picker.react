export const style = (...styles: (string | undefined | false)[]): string => {
  return styles.join(" ");
};
