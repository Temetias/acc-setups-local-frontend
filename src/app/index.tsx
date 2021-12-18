import React from "react";
import { Car, Track } from "../types";
import "./index.css";

const useLocalData = <T1 extends any>(endpoint: string, ...updaters: any[]) => {
  const [localData, setLocalData] = React.useState<T1 | null>(null);
  React.useEffect(() => {
    fetch(`http://localhost:8888${endpoint}`)
      .then((res) => res.json())
      .then(setLocalData);
  }, updaters);
  return localData;
};

const Cars: React.FC<{ selected: Car | null; onSelect: (car: Car) => void }> =
  ({ selected, onSelect }) => {
    const cars = useLocalData<Car[]>("/cars", selected);
    return (
      <div>
        {(cars || []).map((car) => (
          <div key={car} onClick={() => onSelect(car)}>
            {car}
          </div>
        ))}
      </div>
    );
  };

const Tracks: React.FC<{
  car: Car;
  selected: Track | null;
  onSelect: (track: Track) => void;
}> = ({ car, selected, onSelect }) => {
  const tracks = useLocalData<Track[]>(`/tracks?car=${car}`, selected, car);
  return (
    <div>
      {(tracks || []).map((track) => (
        <div key={track} onClick={() => onSelect(track)}>
          {track}
        </div>
      ))}
    </div>
  );
};

const Setups: React.FC<{
  car: Car;
  track: Track;
  selected: string | null;
  onSelect: (setup: string) => void;
}> = ({ car, track, selected, onSelect }) => {
  const setups = useLocalData<Track[]>(
    `/setups?car=${car}&track=${track}`,
    selected,
    car
  );
  return (
    <div>
      {(setups || []).map((setup) => (
        <div key={setup} onClick={() => onSelect(setup)}>
          {setup.replace(/\.[^/.]+$/, "")}
        </div>
      ))}
    </div>
  );
};

const Setup: React.FC<{
  car: Car;
  track: Track;
  setup: string;
}> = ({ car, track, setup }) => {
  const source = useLocalData<object>(
    `/setup?car=${car}&track=${track}&setup=${setup.replace(" ", "+")}`,
    car,
    track,
    setup
  );
  return <div>{JSON.stringify(source)}</div>;
};

type SelectionState =
  | { car: null; track: null; setup: null }
  | { car: Car; track: null; setup: null }
  | { car: Car; track: Track; setup: null }
  | { car: Car; track: Track; setup: string };

const SelectionContext = React.createContext<SelectionState>({
  car: null,
  track: null,
  setup: null,
});

const App: React.FC = () => {
  const [selections, setSelections] = React.useState<SelectionState>({
    car: null,
    track: null,
    setup: null,
  });
  const [setup, setSetup] = React.useState<object | null>(null);
  return (
    <SelectionContext.Provider value={selections}>
      <div className="App">
        <Cars
          selected={selections.car}
          onSelect={(car) => setSelections({ car, track: null, setup: null })}
        />
        {selections.car ? (
          <Tracks
            car={selections.car}
            selected={selections.track}
            onSelect={(track) =>
              setSelections({ ...selections, track, setup: null })
            }
          />
        ) : null}
        {selections.car && selections.track ? (
          <Setups
            car={selections.car}
            track={selections.track}
            selected={selections.track}
            onSelect={(setup) => setSelections({ ...selections, setup })}
          />
        ) : null}
        {selections.car && selections.track && selections.setup ? (
          <Setup {...selections} />
        ) : null}
      </div>
    </SelectionContext.Provider>
  );
};

export default App;
