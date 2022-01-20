import { RecursivePartial } from "./types";

export const noop = (..._: any[]) => {};

export const isObject = (val: any): val is object =>
  typeof val === "object" && !Array.isArray(val) && val !== null;

export const evolve = <T extends object>(
  target: T,
  data: RecursivePartial<T>
) => {
  let newValue: T = target;
  for (const prop in data) {
    newValue = isObject(data[prop])
      ? {
          ...newValue,
          [prop]: evolve(
            newValue[prop] as any as object,
            data[prop] as any as object
          ),
        }
      : { ...newValue, [prop]: data[prop] };
  }
  return newValue;
};
