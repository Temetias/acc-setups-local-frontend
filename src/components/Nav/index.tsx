import { SelectionState } from "../../contexts/SelectionContext";
import useLocalData from "../../hooks/useLocalData";
import { Car, Track } from "../../types";
import "./index.css";

const Cars: React.FC<{
  selected: Car | null;
  onSelect: (car: Car) => void;
}> = ({ selected, onSelect }) => {
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

const Nav: React.FC<{
  selections: SelectionState;
  setSelections: React.Dispatch<React.SetStateAction<SelectionState>>;
}> = ({ selections, setSelections }) => {
  return (
    <div className="Nav">
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
    </div>
  );
};

export default Nav;
