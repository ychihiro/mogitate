interface UseSelectSeason {
  onChange: () => void;
}

export const useSelectSeason = (): UseSelectSeason => {
  const onChange = (): void => {
    console.log("onChange");
  };

  return { onChange };
};
