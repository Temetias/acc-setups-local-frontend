import React from "react";
import Nav from "../../components/Nav";
import SelectionContext, {
  SelectionState,
} from "../../contexts/SelectionContext";
import SetupView from "../SetupView";
import "./index.css";

const AppRoot: React.FC = () => {
  const [selections, setSelections] = React.useState<SelectionState>({
    car: null,
    track: null,
    setup: null,
  });
  return (
    <SelectionContext.Provider value={selections}>
      <div className="App">
        <Nav selections={selections} setSelections={setSelections} />
        {selections.car && selections.track && selections.setup ? (
          <SetupView {...selections} />
        ) : null}
      </div>
    </SelectionContext.Provider>
  );
};

export default AppRoot;
