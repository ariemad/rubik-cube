import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import "../css/Sliders.scss";

function Sliders({ onChange, axisSlider }) {
  return (
    <div className="sliders">
      <p>Rotation on X axis </p>
      <Slider
        size="small"
        value={axisSlider.X}
        min={-180}
        max={180}
        step={1}
        valueLabelDisplay="auto"
        marks={[
          { label: "0°", value: 0 },
          { label: "90°", value: 90 },
          { label: "-90°", value: -90 },
          { label: "-180°", value: -180 },
          { label: "180°", value: 180 },
        ]}
        onChange={onChange}
        name="axisSlider.X"
      />
      <p>Rotation on Y axis </p>
      <Slider
        size="small"
        value={axisSlider.Y}
        min={-180}
        max={180}
        step={1}
        valueLabelDisplay="auto"
        marks={[
          { label: "0°", value: 0 },
          { label: "90°", value: 90 },
          { label: "-90°", value: -90 },
          { label: "-180°", value: -180 },
          { label: "180°", value: 180 },
        ]}
        onChange={onChange}
        name="axisSlider.Y"
      />
      <p>Rotation on Z axis </p>
      <Slider
        size="small"
        value={axisSlider.Z}
        min={-180}
        max={180}
        step={1}
        valueLabelDisplay="auto"
        marks={[
          { label: "0°", value: 0 },
          { label: "90°", value: 90 },
          { label: "-90°", value: -90 },
          { label: "-180°", value: -180 },
          { label: "180°", value: 180 },
        ]}
        onChange={onChange}
        name="axisSlider.Z"
      />
    </div>
  );
}

export default Sliders;
