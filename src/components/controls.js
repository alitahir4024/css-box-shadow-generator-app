import { Box, Typography, Checkbox } from "@material-ui/core";

function Controls({
  horinzontalLengthFunction,
  verticalLengthFunction,
  blurFunction,
  spreadFunction,
  ShadowColorFunction,
  BoxColorFunction,
  InsetFunction,
}) {
  return (
    <Box className="countrols-section">
      <Box className="countrol-box">
        <Typography variant="h6" gutterBottom>
          Horizontal Length
        </Typography>
        <input
          type="range"
          name="horizontalLength"
          onChange={horinzontalLengthFunction}
          min="-200"
          max="200"
          step="1"
          defaultValue={10}
        />
      </Box>
      <Box className="countrol-box">
        <Typography variant="h6" gutterBottom>
          Vertical Length
        </Typography>
        <input
          type="range"
          name="verticalValue"
          onChange={verticalLengthFunction}
          min="-200"
          max="200"
          step="1"
          defaultValue={10}
        />
      </Box>
      <Box className="countrol-box">
        <Typography variant="h6" gutterBottom>
          Blur Radius
        </Typography>
        <input
          type="range"
          name="blurValue"
          onChange={blurFunction}
          min="0"
          max="300"
          step="1"
          defaultValue={5}
        />
      </Box>
      <Box className="countrol-box">
        <Typography variant="h6" gutterBottom>
          Spread Radius
        </Typography>
        <input
          type="range"
          name="spreadValue"
          onChange={spreadFunction}
          min="-200"
          max="200"
          step="1"
          defaultValue={0}
        />
      </Box>
      <Box className="countrol-box color-countrol-box">
        <Typography variant="h6" gutterBottom>
          Box color
        </Typography>
        <input
          type="color"
          name="boxColor"
          onChange={BoxColorFunction}
          defaultValue="#e7a61a"
        />
      </Box>
      <Box className="countrol-box color-countrol-box">
        <Typography variant="h6" gutterBottom>
          Shadow Color
        </Typography>
        <input
          type="color"
          name="shadowColor"
          onChange={ShadowColorFunction}
          defaultValue="#000000"
        />
      </Box>
      <Box className="countrol-box color-countrol-box">
        <Typography variant="h6" gutterBottom>
          Inset
        </Typography>
        <Checkbox color="primary" onChange={InsetFunction} />
      </Box>
    </Box>
  );
}

export default Controls;
