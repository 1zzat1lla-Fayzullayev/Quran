import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import ArabicNumber from "../shared/selectedSurah/ArabicNumber";
import AudioPlayer from "../shared/selectedSurah/AudioPlayer";

function SelectedSurah() {
  const param = useParams();
  const [audioStates, setAudioStates] = useState([]);
  const [surah, setSurah] = useState({});
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const getArabicNumerals = (number) => {
    const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((digit) => arabicNumerals[digit])
      .join("");
  };

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah/${param.number}/ar.alafasy`)
      .then((res) => {
        setSurah(res.data.data);
        setAudioStates(new Array(res.data.data.ayahs.length).fill(false));
      });
  }, [param.number]);

  const validAudioURLs = surah.ayahs
    ? surah.ayahs
        .map((ayah) => ayah.audioSecondary)
        .filter((audioURL) => audioURL && audioURL !== "null")
        .flat()
    : [];

  const audioSources = validAudioURLs.map((url, index) => (
    <source key={index} src={url} type="audio/mp3" />
  ));

  const handleAudioPlay = (index) => {
    setIsAudioPlaying(true);
    setCurrentAudioIndex(index);
  };

  const handleAudioPause = () => {
    setIsAudioPlaying(false);
  };

  const handleAudioEnded = () => {
    if (currentAudioIndex < validAudioURLs.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    }
  };

  return (
    <>
      {JSON.stringify(surah) !== "{}" ? (
        <div className="text-white font-Poppins">
          <Wrapper>
            <div className="w-[100%]">
              <AudioPlayer
                audioSources={audioSources}
                handleAudioPause={handleAudioPause}
                handleAudioEnded={handleAudioEnded}
                handleAudioPlay={handleAudioPlay}
                validAudioURLs={validAudioURLs}
                numberOfTranslatingSurah={param.number}
              />
              {surah.ayahs.map((v, i) => (
                <div key={i}>
                  <ArabicNumber
                    isAudioPlaying={isAudioPlaying}
                    currentAudioIndex={currentAudioIndex}
                    audioSources={audioSources}
                    i={i}
                    getArabicNumerals={getArabicNumerals}
                    v={v}
                    text={v.text}
                    handleAudioPause={handleAudioPause}
                    handleAudioEnded={handleAudioEnded}
                    handleAudioPlay={handleAudioPlay}
                  />
                </div>
              ))}
            </div>
          </Wrapper>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default SelectedSurah;
