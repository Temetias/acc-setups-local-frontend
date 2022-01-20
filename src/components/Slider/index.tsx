import "./styles.css";

type SliderProps = {
  title: string;
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (value: number) => void;
  unit?: string;
  children?: never;
};

const Slider: React.FC<SliderProps> = ({ onChange, unit, title, ...props }) => {
  const parseNumber = Number.isInteger(props.step) ? parseInt : parseFloat;
  const clamp = (num: number) =>
    num <= props.min ? props.min : num >= props.max ? props.max : num;

  return (
    <div className="Slider-outer-wrap">
      <div className="Slider-title">{title}</div>
      <div className="Slider-wrap">
        <button onClick={() => onChange(clamp(props.value - props.step))}>
          {"<"}
        </button>
        <div className="Slider">
          <input
            className="Slider-input"
            type="range"
            {...props}
            onChange={(e) => onChange(clamp(parseNumber(e.target.value)))}
          />
          <div
            className="Slider-bar"
            style={{ width: `${(props.value / props.max) * 100}%` }}
          ></div>
          <div className="Slider-value">
            {props.value} {unit}
          </div>
        </div>
        <button onClick={() => onChange(clamp(props.value + props.step))}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
