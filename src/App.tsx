import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

type Apod = {
  title: string;
  url: string;
  explanation: string;
  media_type: "image" | "video";
};

export default function App() {
  const [data, setData] = useState<Apod | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
        .then((response) => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.json();
        })
        .then((data: Apod) => setData(data))
        .catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>loading...</p>;

  return (
      <>
        <h1>{data.title}</h1>
        {data.media_type === "image" ? (
            <img src={data.url} />
        ) : (
            <video src={data.url} controls />
        )}
        <p>{data.explanation}</p>
      </>
  );
}