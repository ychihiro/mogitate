import React from "react";
import { useSeasonList } from "../hooks/useFetchSeason";
import { usePriceList } from "../hooks/useFetchPriceList";
import { useSelectSeason } from "../hooks/useSelectSeason";
import { useSelectPrice } from "../hooks/useSelectPrice";
import { TopPage } from "../presenter/TopPage";

export const TopPageContainer: React.FC = () => {
  const seasonList = useSeasonList();
  const priceList = usePriceList();
  const selectSeason = useSelectSeason();
  const selectPrice = useSelectPrice();

  return (
    <>
      <TopPage
        seasonList={seasonList}
        priceList={priceList}
        selectSeason={selectSeason.onChange}
        selectPrice={selectPrice.onChange}
      />
    </>
  );
};
