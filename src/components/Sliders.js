import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import "../css/Sliders.scss";

function Options({ onChange, axisSlider }) {
  return (
    <div className="options">
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
      <p>Scale</p>

      <FormControl>
        <FormLabel id="model-radio">Model</FormLabel>
        <RadioGroup
          aria-labelledby="model-radio"
          defaultValue="rubik"
          name="model-selection"
          onChange={onChange}
        >
          <FormControlLabel
            value="rubik"
            control={<Radio />}
            label="Rubik Cube"
          />
          <FormControlLabel value="cube" control={<Radio />} label="Cube" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Options;
