import { useEffect, useState } from "react";

export interface Season {
  label: string;
  value: number;
}

export const useSeasonList = (): Season[] => {
  const [seasonList, setSeasonList] = useState<Season[]>([]);

  useEffect(() => {
    setSeasonList([
      { label: "春", value: 1 },
      { label: "夏", value: 2 },
      { label: "秋", value: 3 },
      { label: "冬", value: 4 },
    ]);
  }, []);

  return seasonList;
};
