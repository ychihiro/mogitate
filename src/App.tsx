import React from "react";
import { BaseLayout } from "./components/ui/index";
import DetailPage from "./components/DetailPage";

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
      <DetailPage></DetailPage>
    </div>
  );
};

export default App;
