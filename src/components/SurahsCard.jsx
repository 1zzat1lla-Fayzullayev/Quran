import React, { useEffect, useState } from "react";
import Card from "./Card";

function SurahsCard() {
  const [surahsData, setSurahsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.alquran.cloud/v1/quran/ar.alafasy"
        );
        const result = await response.json();
        console.log("API Response:", result);

        if (result.data && Array.isArray(result.data.surahs)) {
          setSurahsData(result.data.surahs);
        } else {
          throw new Error("Invalid data format received from the API");
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-[15px] mt-[50px]">
        {surahsData.map((surah) => (
          <div key={surah.number}>
            <Card surah={surah} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SurahsCard;
