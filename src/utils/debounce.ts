type DebouncedFunction<T extends (...args: any[]) => void> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
};

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): DebouncedFunction<T> => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debouncedFunction: DebouncedFunction<T> = (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };

  debouncedFunction.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFunction;
};
