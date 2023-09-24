import React from "react";
import "../css/Header.css";
import BaseButton from "./ui/button/BaseButton";

export const Header = (): JSX.Element => {
  return (
    <header className="header">
      <h1 className="ttl">mogitate</h1>
      <form action="post">
        <input
          className="search-box"
          type="text"
          name="name"
          placeholder="フルーツの名前を入力してください"
        />
        <label className="select-box">
          <select name="select-season" id="">
            <option selected disabled>
              季節を選ぶ
            </option>
            <option value="1">春</option>
            <option value="2">夏</option>
            <option value="3">秋</option>
            <option value="4">冬</option>
          </select>
        </label>
        <label className="select-box">
          <select name="select-price" id="">
            <option selected disabled>
              価格を選ぶ
            </option>
            <option value="1">800円未満</option>
            <option value="2">800~1000円未満</option>
            <option value="3">1000~1200円未満</option>
            <option value="4">1200円以上</option>
          </select>
        </label>
        <input className="btn" type="submit" value="検索" />
        <BaseButton text="文字列"></BaseButton>
      </form>
    </header>
  );
};

export default Header;
