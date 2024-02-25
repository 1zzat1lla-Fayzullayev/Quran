import { useRef, useState, useEffect } from "react";
import sound from "../../assets/sound.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function AudioPlayer({
  validAudioURLs,
  handleAudioPause,
  audioSources,
  handleAudioPlay,
  numberOfTranslatingSurah,
}) {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [selecedAyah, setSelectedAyah] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleEnded = () => {
      if (currentAudioIndex < validAudioURLs.length - 1) {
        setCurrentAudioIndex((prevIndex) => prevIndex + 1);
        playAudio(validAudioURLs[currentAudioIndex + 1], currentAudioIndex + 1);
      } else {
        console.log("All audio tracks have ended");
      }
    };
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [validAudioURLs, currentAudioIndex]);

  const playAudio = (audioUrl, index) => {
    setCurrentAudioIndex(index);
    audioRef.current.src = audioUrl;
    audioRef.current.play();
    setIsPlaying(true);
  };
  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio(validAudioURLs[currentAudioIndex], currentAudioIndex);
    }
  };
  const handleClickAyah = (clickedSurah) => {
    navigate(`/translate/${numberOfTranslatingSurah}`);
  };

  return (
    <div className="flex justify-center items-center my-[20px] mt-[50px]">
      {validAudioURLs && validAudioURLs.length > 0 ? (
        <div className="flex justify-between items-center w-[100%]">
          <div>
            <div className="flex flex-col items-center">
              <img
                src={sound}
                alt="sound image"
                onClick={toggleAudio}
                style={{ cursor: "pointer" }}
                className="w-[70px] bg-[#DDE6ED] rounded-[50%] p-[5px]"
              />
              {isPlaying && (
                <button onClick={pauseAudio} className="mt-[5px]">
                  Pause
                </button>
              )}
            </div>
            <audio
              ref={audioRef}
              onPlay={() => handleAudioPlay(currentAudioIndex)}
            >
              {validAudioURLs.map((audioUrl, index) => (
                <source key={index} src={audioUrl} type="audio/mp3" />
              ))}
            </audio>
          </div>
          <div>
            <p
              className="bg-[#DDE6ED] text-black p-[5px] rounded-[10px] cursor-pointer"
              onClick={handleClickAyah}
            >
              Tarjima qilish
            </p>
          </div>
        </div>
      ) : (
        <p>Audio topilmadi :(</p>
      )}
    </div>
  );
}

export default AudioPlayer;
