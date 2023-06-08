export const repeat = <T>(
  times: number,
  block: (index: number) => T
): T[] => {
  const resultList: T[] = [];
  for (let i = 0; i < times; i++) {
    resultList.push(block(i));
  }
  return resultList;
};
