import React from "react";
import { BaseLayout } from "./components/ui/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DetailPage from "./components/DetailPage";

export const App: React.FC = () => {
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
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
          <Route path="/detail" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
