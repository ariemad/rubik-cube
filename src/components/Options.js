import { Slider } from "@mui/material";
import "../css/Options.scss";

function Options({ onChange }) {
  return (
    <div className="options">
      <p>Rotation on X axis </p>
      <Slider
        size="small"
        defaultValue={0}
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
        name="rotationX"
      />
      <p>Rotation on Y axis </p>
      <Slider
        size="small"
        defaultValue={0}
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
        name="rotationY"
      />
      <p>Rotation on Z axis </p>
      <Slider
        size="small"
        defaultValue={0}
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
        name="rotationZ"
      />
      <p>Scale</p>
      <Slider
        size="small"
        defaultValue={1}
        min={0}
        max={2}
        step={0.01}
        valueLabelDisplay="auto"
        marks={[
          { label: "0", value: 0 },
          { label: "0.5", value: 0.5 },
          { label: "1", value: 1 },
          { label: "1.5", value: 1.5 },
          { label: "2", value: 2 },
        ]}
        onChange={onChange}
        name="scale"
      />
    </div>
  );
}

export default Options;
