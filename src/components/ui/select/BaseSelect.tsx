import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
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

export const BaseButton: React.FC<Props> = (props) => {
  const [selectValue, setSelectValue] = React.useState<string | undefined>();

  // ドロップダウンメニューの値が変更された時の処理
  const onChange = (event: SelectChangeEvent): void => {
    console.log("onChange");
    console.log(selectValue);
    setSelectValue(event.target.value);
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

  return (
    <FormControl fullWidth>
      <InputLabel id={props.id}>{props.label}</InputLabel>
      <Select
        labelId={props.id}
        id="select"
        value={selectValue}
        label={props.label}
        onChange={onChange}
      >
        {menuList}
      </Select>
    </FormControl>
  );
};

export default BaseButton;
