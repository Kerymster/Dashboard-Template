/* eslint-disable @typescript-eslint/ban-ts-comment */

export const setLocalStorage = <T>(id: string, data: T) =>
  typeof window !== undefined &&
  localStorage?.setItem(id, JSON.stringify(data));

// @ts-ignore
export const getLocalStorage: <T>(id: string) => T = <T>(id: string): T => {
  if (typeof window !== undefined) {
    // @ts-ignore
    return JSON.parse(localStorage?.getItem(id));
  }
};

export const removeFromLocalStorage: (key: string) => void = (key: string) =>
  typeof window !== undefined && localStorage?.removeItem(key);

export const transformSearchParamsProperty = (
  param: Record<'label' | 'value', string>[]
): string[] => param?.map(({ value }) => value);
