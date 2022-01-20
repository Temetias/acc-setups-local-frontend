export type NonEmptyArray<T> = [T, ...T[]];

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type Car = "bmw_m6_gt3" | "ferrari_488_gt3_evo" | "lexus_rc_f_gt3";

export type Track = "Kyalami" | "Silverstone" | "Spa";

// TODO
export type Setup = {
  advancedSetup: {
    aeroBalance: {
      brakeDuct: [number, number];
      rearWing: number;
      rideHeight: [number, number, number, number];
      rodLenght: [number, number, number, number];
      splitter: number;
    };
  };
  basicSetup: {
    electronics: {
      abs: number;
      eCUMap: number;
      fuelMix: number;
      tC1: number;
      tC2: number;
      telemetryLaps: number;
    };
  };
  carName: Car;
  trackBopType: number;
};
