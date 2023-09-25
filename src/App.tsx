import React from "react";
import Header from "./components/Header";
import DetailPage from "./components/DetailPage";

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header></Header>
      <DetailPage></DetailPage>
    </div>
  );
};

export default App;
