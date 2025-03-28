import { useState } from "react";

export const useLoader = (initialState) => {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => {
    setIsLoading(true);
  };
  const stopLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, startLoading, stopLoading };
};
