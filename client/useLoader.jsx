import { useEffect, useState } from "react";

export function useLoader(loadingFn) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    async function check() {
      setLoading(true);
      try {
        setData(await loadingFn());
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    check();
  }, []);

  return { loading, error, data };
}
