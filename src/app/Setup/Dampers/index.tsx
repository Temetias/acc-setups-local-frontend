import TitledBox from "../../../components/TitledBox";
import { BaseSetupProps } from "../types";
import "./index.css";

const Dampers: React.FC<BaseSetupProps> = ({ setup }) => (
  <div className="Dampers">
    <div>
      <TitledBox title="left front">
        <div></div>
      </TitledBox>
      <TitledBox title="right front">
        <div></div>
      </TitledBox>
    </div>
    <div>CAR</div>
    <div>
      <TitledBox title="left rear">
        <div></div>
      </TitledBox>
      <TitledBox title="right rear">
        <div></div>
      </TitledBox>
    </div>
  </div>
);

export default Dampers;
