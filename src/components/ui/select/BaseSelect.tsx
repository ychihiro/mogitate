import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  type SelectChangeEvent,
} from "@mui/material";
import React from "react";

interface Menu {
  label: string;
  value: number | null;
}

interface Props {
  id: string;
  label: string;
  menus: Menu[];
  change: () => void;
}

export const BaseSelect: React.FC<Props> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string | undefined>();

  // ドロップダウンメニューの値が変更された時の処理
  const onChange = (event: SelectChangeEvent<unknown>): void => {
    setSelectValue(event.target.value as string);
    props.change();
  };

  // ドロップダウンメニューのリストを作成
  const menuList = props.menus.map((menu, index) => {
    return (
      <MenuItem key={index} value={menu.label}>
        {menu.label}
      </MenuItem>
    );
  });

  const StyledSelect = styled(Select)(() => ({
    ".MuiSelect-select": {
      color: "#9B8888",
      backgroundColor: "#F7F7F7",
      border: "1px solid #E0DFDE",
    },
  }));

  return (
    <FormControl fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <StyledSelect
        labelId={props.id}
        id="select"
        value={selectValue}
        label={props.label}
        onChange={onChange}
      >
        {menuList}
      </StyledSelect>
    </FormControl>
  );
};

export default BaseSelect;
