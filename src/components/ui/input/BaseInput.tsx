import React from "react";
import { Box, TextField } from "@mui/material";

interface Props {
  id: string;
  label?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
}

export const BaseInput: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(value);
    setValue(event.target.value);
  };

  return (
    <Box component="form">
      <TextField
        id={props.id}
        label={props.label ?? ""}
        variant={props.variant ?? "outlined"}
        placeholder={props.placeholder ?? ""}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
};

export default BaseInput;
