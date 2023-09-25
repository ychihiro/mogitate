import React from "react";
import "../css/Header.css";
import { BaseButton, BaseInput, BaseSelect } from "../components/ui/index";

export const Header: React.FC = () => {
  const seasonList = [
    { label: "", value: null },
    { label: "春", value: 1 },
    { label: "夏", value: 2 },
    { label: "秋", value: 3 },
    { label: "冬", value: 4 },
  ];

  const selectSeason = (): void => {
    console.log("selectSeason");
    console.log("季節が選択されました");
  };

  const priceList = [
    { label: "800円未満", value: 1 },
    { label: "800~1000円未満", value: 2 },
    { label: "1000~1200円未満", value: 3 },
    { label: "1200円以上", value: 4 },
  ];

  const selectPrice = (): void => {
    console.log("selectPrice");
    console.log("価格が選択されました");
  };

  return (
    <header className="header">
      <h1 className="ttl">mogitate</h1>
      <form action="post">
        <BaseInput
          id="fruit"
          placeholder="フルーツの名前を入力してください"
          variant="outlined"
        ></BaseInput>
        <BaseSelect
          id="season"
          label="季節を選ぶ"
          menus={seasonList}
          change={selectSeason}
        ></BaseSelect>
        <BaseSelect
          id="price"
          label="価格を選ぶ"
          menus={priceList}
          change={selectPrice}
        ></BaseSelect>
        <BaseButton text="検索"></BaseButton>
      </form>
    </header>
  );
};

export default Header;
