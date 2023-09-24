import React from "react";
// import Header from "./components/Header";
// import Kiwi from "./img/キウイ.jpg";
import BaseLayout from "./components/ui/layout/BaseLayout";

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <BaseLayout></BaseLayout>
      {/* <Header></Header>
      <main>
        <div className="menu-box">
          <img src={Kiwi} alt="メニュー画像" />
          <p>キウイ</p>
          <p>¥800</p>
        </div>
      </main> */}
    </div>
  );
};

export default App;
