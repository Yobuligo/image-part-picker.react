export const ifTrue = (value: boolean | undefined, block: () => void) => {
  if (value !== undefined && value) {
    block();
  }
};
