import React from "react";
import { BaseButton, BaseInput, BaseSelect } from "../../../ui";
import { type Season } from "../hooks/useFetchSeason";
import { type Price } from "../hooks/useFetchPriceList";

interface Props {
  seasonList: Season[];
  priceList: Price[];
  selectSeason: () => void;
  selectPrice: () => void;
}

export const TopPage: React.FC<Props> = (props) => {
  return (
    <>
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
          menus={props.seasonList}
          change={props.selectSeason}
        ></BaseSelect>
        <BaseSelect
          id="price"
          label="価格を選ぶ"
          menus={props.priceList}
          change={props.selectPrice}
        ></BaseSelect>
        <BaseButton text="検索"></BaseButton>
      </form>
      <p>TopPage</p>
    </>
  );
};
