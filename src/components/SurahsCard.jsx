import React, { useEffect, useState } from "react";
import Card from "./Card";
import LoadingSvg from "../svg/LoadingSvg";
import SelectedSurah from "../pages/SelectedSurah";
import { useNavigate, useParams } from "react-router-dom";

function SurahsCard({ search }) {
  const [surahsData, setSurahsData] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSurahcard, setSelectedSurah] = useState(null);
  const navigate = useNavigate();

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
          setFilteredSurahs(result.data.surahs);
          setLoading(false);
        } else {
          throw new Error("Invalid data format received from the API");
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = surahsData.filter((surah) =>
      surah.englishName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSurahs(filtered);
  }, [search, surahsData]);

  const handleSurahClick = (clickedSurah) => {
    setSelectedSurah(clickedSurah);
    navigate(`/surah/${clickedSurah.number}`);
  };

  if (loading) {
    <h1>Biroz kuting...</h1>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-[15px] mt-[50px]">
        {filteredSurahs.map((surah) => (
          <div key={surah.number} onClick={() => handleSurahClick(surah)}>
            <Card surah={surah} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SurahsCard;
