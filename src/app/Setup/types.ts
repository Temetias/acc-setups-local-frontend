import { Setup } from "../../types";

export type BaseSetupProps = {
  setup: Setup;
  onChange: (setup: Setup) => void;
};
