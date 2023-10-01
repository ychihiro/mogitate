import React from "react";
import Header from "../../Header";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout: React.FC<Props> = (props) => {
  const children = props.children;
  return (
    <main>
      <Header></Header>
      {children}
      <p>footer</p>
    </main>
  );
};

export default BaseLayout;
