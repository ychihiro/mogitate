import React from "react";
import { TopPageContainer } from "../features/TopPage/container/TopPageContainer";
import { BaseLayout } from "../ui";

export const TopPage: React.FC = () => {
  return (
    <BaseLayout>
      <TopPageContainer />
    </BaseLayout>
  );
};
