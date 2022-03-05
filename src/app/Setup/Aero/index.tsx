import Slider from "../../../components/Slider";
import TitledBox from "../../../components/TitledBox";
import { evolve, noop } from "../../../utils";
import { BaseSetupProps } from "../types";
import "./index.css";

const Aero: React.FC<BaseSetupProps> = ({ setup, onChange }) => (
  <div className="Aero">
    <TitledBox title="rear">
      <div>
        <Slider
          title="ride height"
          value={68}
          step={1}
          onChange={noop}
          min={55}
          max={90}
          unit="mm"
        />
        <Slider
          title="rear wing"
          value={setup.advancedSetup.aeroBalance.rearWing}
          step={1}
          onChange={(val) =>
            onChange(
              evolve(setup, {
                advancedSetup: { aeroBalance: { rearWing: val } },
              })
            )
          }
          min={0}
          max={5}
        />
        <Slider
          title="brake ducts"
          value={setup.advancedSetup.aeroBalance.brakeDuct[1]}
          step={1}
          onChange={(val) =>
            onChange(
              evolve(setup, {
                advancedSetup: {
                  aeroBalance: {
                    brakeDuct: [
                      setup.advancedSetup.aeroBalance.brakeDuct[0],
                      val,
                    ],
                  },
                },
              })
            )
          }
          min={0}
          max={6}
        />
      </div>
    </TitledBox>
    <TitledBox title="front">
      <div>
        <Slider
          title="ride height"
          value={56}
          step={1}
          onChange={noop}
          min={55}
          max={90}
          unit="mm"
        />
        <Slider
          title="splitter"
          value={0}
          step={1}
          onChange={noop}
          min={0}
          max={0}
        />
        <Slider
          title="brake ducts"
          value={setup.advancedSetup.aeroBalance.brakeDuct[0]}
          step={1}
          onChange={(val) =>
            onChange(
              evolve(setup, {
                advancedSetup: {
                  aeroBalance: {
                    brakeDuct: [
                      val,
                      setup.advancedSetup.aeroBalance.brakeDuct[1],
                    ],
                  },
                },
              })
            )
          }
          min={0}
          max={6}
        />
      </div>
    </TitledBox>
    <div>CAR</div>
  </div>
);

export default Aero;
