import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../layout/Wrapper";

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
            <div className="flex flex-col md:flex-row justify-between items-center m-[25px]">
              <h2 className="font-semibold text-[20px] md:text-[30px]">
                {surah.englishName}
              </h2>
              <h2 className="font-semibold text-[20px] md:text-[30px] font-Arabic">
                {surah.name}
              </h2>
            </div>
            <div className="flex justify-center items-center flex-col w-[100%] text-[25px] mt-[100px]">
              <div>
                {validAudioURLs.length > 0 ? (
                  <div>
                    <audio
                      controls
                      onPlay={() => handleAudioPlay(0)}
                      onPause={handleAudioPause}
                      onEnded={handleAudioEnded}
                    >
                      {audioSources}
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ) : (
                  <p>Audio topilmadi :(</p>
                )}
              </div>
              <div className="w-[100%]">
                {surah.ayahs.map((v, i) => (
                  <div
                    key={i}
                    className={`font-Montserrat flex items-center justify-center text-center w-[100%] ${
                      isAudioPlaying && currentAudioIndex === i
                        ? "audio-playing"
                        : ""
                    }`}
                  >
                    <div className="relative font-Arabic">
                      <h1 className="text-[30px] m-[2px]">۝</h1>
                      <span className="text-white absolute left-0 bottom-0 top-[10px] right-0 text-[18px]">
                        {getArabicNumerals(i + 1)}
                      </span>
                    </div>
                    <p className="text-[35px]">{v.text}</p>
                  </div>
                ))}
              </div>
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
