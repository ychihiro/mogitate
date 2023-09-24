import React from "react";
import Header from "./components/Header";
import Kiwi from "./img/キウイ.jpg";

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="menu-box">
          <img src={Kiwi} alt="メニュー画像" />
          <p>キウイ</p>
          <p>¥800</p>
        </div>
      </main>
    </div>
  );
};

export default App;
