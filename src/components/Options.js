import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
} from "@mui/material";
import "../css/Options.scss";

const PLATONIC_SOLIDS = [
  "tetrahedron",
  "octahedron",
  "icosahedron",
  "dodecahedron",
];

function Options({ onChange, menuOptions }) {
  let cubeFrameCheckBOx;
  if (PLATONIC_SOLIDS.includes(menuOptions["model-selection"])) {
    cubeFrameCheckBOx = (
      <FormControlLabel
        control={<Checkbox checked={menuOptions.cubeFrame} />}
        label="Show Cube Frame"
        onChange={onChange}
        name={"cubeFrame"}
      />
    );
  }
  return (
    <div className="options">
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
          <FormControlLabel
            value="tetrahedron"
            control={<Radio />}
            label="Tetrahedron"
          />
          <FormControlLabel
            value="octahedron"
            control={<Radio />}
            label="Octahedron"
          />
          <FormControlLabel
            value="icosahedron"
            control={<Radio />}
            label="Icosahedron"
          />
          <FormControlLabel
            value="dodecahedron"
            control={<Radio />}
            label="Dodecahedron"
          />
        </RadioGroup>
      </FormControl>

      <FormControl>
        <FormLabel id="">Options</FormLabel>
        <FormControlLabel
          control={<Checkbox />}
          label="Show Axis"
          onChange={onChange}
          name={"axisDisplay"}
        />
        {cubeFrameCheckBOx}
      </FormControl>
    </div>
  );
}

export default Options;
