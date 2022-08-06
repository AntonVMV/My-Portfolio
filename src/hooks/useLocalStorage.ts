import { useState, useEffect } from "react";

export const useLocalStorage = <T>(
  value: T,
  key: string
): [T, (item: T) => void] => {
  const getLocalValue = () => {
    const result = localStorage.getItem(key);
    if (result) {
      return JSON.parse(result);
    } else {
      return value;
    }
  };

  const [localValue, setLocalValue] = useState<T>(getLocalValue());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localValue));
  }, [localValue]);

  return [localValue, setLocalValue];
};
