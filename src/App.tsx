import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import { TopPage } from "./components/pages/TopPage";

export const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <Routes>
        <Route path="/" element={<TopPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
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
