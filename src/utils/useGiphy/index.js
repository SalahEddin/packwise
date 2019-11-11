import { useState, useEffect } from 'react';

// will generate one random gif
function useGiphy(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successful, setSuccessful] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const randomOffset = Math.floor(Math.random() * 100);
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=XxwaJMGo8dKhEuNdDVlkTk2DsDdus2Mr&q=${query}&limit=1&offset=${randomOffset}&rating=G&lang=en`
      );
      try {
        const json = await response.json();
        setSuccessful(true);
        setResults(
          json.data.map(item => {
            return item.images.preview.mp4;
          })
        );
      } catch {
        setSuccessful(false);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return [results, loading, successful];
}

export default useGiphy;