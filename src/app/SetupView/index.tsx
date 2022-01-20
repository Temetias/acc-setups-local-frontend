import React from "react";
import Tabs from "../../components/Tabs";
import useLocalData from "../../hooks/useLocalData";
import { Car, Setup, Track } from "../../types";
import Setups from "../Setup";

type SetupViewProps = {
  car: Car;
  track: Track;
  setup: string;
};

const SetupView: React.FC<SetupViewProps> = ({ car, track, setup }) => {
  const setupFileData = useLocalData<Setup>(
    `/setup?car=${car}&track=${track}&setup=${setup.replace(" ", "+")}`,
    car,
    track,
    setup
  );

  const [setupData, setSetupData] = React.useState(setupFileData);

  React.useEffect(() => setSetupData(setupFileData), [setupFileData]);

  return setupData ? (
    <Tabs
      content={[
        ["aero", <Setups.Aero setup={setupData} onChange={setSetupData} />],
        [
          "dampers",
          <Setups.Dampers setup={setupData} onChange={setSetupData} />,
        ],
      ]}
    />
  ) : (
    <div>Loading setup...</div>
  );
};

export default SetupView;
