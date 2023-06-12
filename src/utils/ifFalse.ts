export const ifFalse = (value: boolean | undefined, block: () => void) => {
  if (value !== undefined && !value) {
    block();
  }
};
