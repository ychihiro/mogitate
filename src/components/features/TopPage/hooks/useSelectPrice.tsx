interface UseSelectPrice {
  onChange: () => void;
}

export const useSelectPrice = (): UseSelectPrice => {
  const onChange = (): void => {
    console.log("onChange");
  };

  return { onChange };
};
