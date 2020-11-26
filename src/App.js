import { Fragment, useState } from "react";
import { Typography, Box } from "@material-ui/core";
import Controls from "./components/controls.js";
import Output from "./components/output.js";
import "./App.css";

function App() {
  // horizontal length

  const [HorizontalLength, setHorizontalLength] = useState(10);

  const handleHorizontalLength = (e) => {
    setHorizontalLength(e.target.value);
  };

  // vertical length

  const [verticalLength, setverticalLength] = useState(10);

  const handleVerticalLength = (e) => {
    setverticalLength(e.target.value);
  };

  // blur radius

  const [BlurRadius, setBlurRadius] = useState(5);

  const handleBlur = (e) => {
    setBlurRadius(e.target.value);
  };

  // spread radius

  const [SpreadRadius, setSpreadRadius] = useState(0);

  const handleSpread = (e) => {
    setSpreadRadius(e.target.value);
  };

  // box color

  const [BoxColor, setBoxColor] = useState("#e7a61a");

  const handleBoxColor = (e) => {
    setBoxColor(e.target.value);
  };

  // shadow color

  const [ShadowColor, setShadowColor] = useState("#000000");

  const handleShadowColor = (e) => {
    setShadowColor(e.target.value);
  };

  // inset

  const [inset, setInset] = useState("");

  const handleInset = (e) => {
    setInset(e.target.checked);
    console.log(e.target.checked);
  };

  // copy to clipboard

  const [copied, setCopied] = useState(false);

  const handlleCopy = () => {
    setCopied(true);
    console.log("worked");
  };

  return (
    <Fragment>
      <Typography variant="h3" align="center" className="app-heading">
        CSS Box Shadow Generator
      </Typography>
      <Box className="generator-plate">
        <Controls
          horinzontalLengthFunction={handleHorizontalLength}
          verticalLengthFunction={handleVerticalLength}
          blurFunction={handleBlur}
          spreadFunction={handleSpread}
          ShadowColorFunction={handleShadowColor}
          BoxColorFunction={handleBoxColor}
          InsetFunction={handleInset}
          copyFunction={handlleCopy}
        />
        <Output
          horinzontalLengthValue={HorizontalLength}
          verticalLengthValue={verticalLength}
          blurValue={BlurRadius}
          spreadValue={SpreadRadius}
          ShadowColorValue={ShadowColor}
          BoxColorValue={BoxColor}
          InsetValue={inset}
          copyValue={copied}
        />
      </Box>
    </Fragment>
  );
}

export default App;
