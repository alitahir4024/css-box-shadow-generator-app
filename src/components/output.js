import { Fragment } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Output({
  horinzontalLengthValue,
  verticalLengthValue,
  blurValue,
  spreadValue,
  BoxColorValue,
  ShadowColorValue,
  InsetValue,
  copyFunction,
  copyValue,
}) {
  return (
    <Fragment>
      <Box
        className="output-section"
        style={{
          boxShadow: `${
            InsetValue ? "inset" : ""
          } ${horinzontalLengthValue}px ${verticalLengthValue}px ${blurValue}px ${spreadValue}px ${ShadowColorValue}`,
          backgroundColor: `${BoxColorValue}`,
        }}
      >
        <Typography variant="h6">
          box-shadow:
          {`${
            InsetValue ? "inset" : ""
          } ${horinzontalLengthValue}px ${verticalLengthValue}px ${blurValue}px ${spreadValue}px ${ShadowColorValue}`}
        </Typography>
        <CopyToClipboard
          onCopy={copyFunction}
          text={
            `${copyValue}`
              ? `${
                  InsetValue ? "inset" : ""
                } ${horinzontalLengthValue}px ${verticalLengthValue}px ${blurValue}px ${spreadValue}px ${ShadowColorValue}`
              : ""
          }
        >
          <Button variant="contained">Copy To clipboard</Button>
        </CopyToClipboard>
      </Box>
    </Fragment>
  );
}

export default Output;
