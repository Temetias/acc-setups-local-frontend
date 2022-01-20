import TitledBox from "../../../components/TitledBox";
import { Setup } from "../../../types";
import { BaseSetupProps } from "../types";
import "./index.css";

const Dampers: React.FC<BaseSetupProps> = ({ setup }) => (
  <div className="Dampers">
    <TitledBox title="left front">
      <div></div>
    </TitledBox>
    <TitledBox title="right front">
      <div></div>
    </TitledBox>
    <TitledBox title="left rear">
      <div></div>
    </TitledBox>
    <TitledBox title="right rear">
      <div></div>
    </TitledBox>
    <h1>CAR</h1>
  </div>
);

export default Dampers;
