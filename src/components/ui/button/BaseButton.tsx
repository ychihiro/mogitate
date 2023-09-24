import React from "react";
import Button from "@mui/material/Button";

interface Props {
  text: string;
}

export const BaseButton: React.FC<Props> = (props) => {
  return (
    <Button variant="contained" size="large">
      {props.text}
    </Button>
  );
};

export default BaseButton;
