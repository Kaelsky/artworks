import { Dispatch, SetStateAction, useEffect, useState } from "react";

type DataType = {
  data: any;
  isLoading: boolean;
  isError: boolean;
};

type useFetchDataReturnType = [DataType, Dispatch<SetStateAction<string>>];

export const useFetchData = (initialUrl: string): useFetchDataReturnType => {
  const [data, setData] = useState();
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        await fetch(url)
          .then((response) => response.json())
          .then((response) => setData(response));
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url, initialUrl]);

  return [{ data, isLoading, isError }, setUrl];
};
