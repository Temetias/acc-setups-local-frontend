import React from "react";
import { Car, Track } from "../types";

export type SelectionState =
  | { car: null; track: null; setup: null }
  | { car: Car; track: null; setup: null }
  | { car: Car; track: Track; setup: null }
  | { car: Car; track: Track; setup: string };

const SelectionContext = React.createContext<SelectionState>({
  car: null,
  track: null,
  setup: null,
});

export default SelectionContext;
