import { useEffect, useState } from "react";

export interface Price {
  label: string;
  value: number;
}

export const usePriceList = (): Price[] => {
  const [priceList, setPriceList] = useState<Price[]>([]);

  useEffect(() => {
    setPriceList([
      { label: "800円未満", value: 1 },
      { label: "800~1000円未満", value: 2 },
      { label: "1000~1200円未満", value: 3 },
      { label: "1200円以上", value: 4 },
    ]);
  }, []);

  return priceList;
};
