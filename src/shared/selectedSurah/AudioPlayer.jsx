import { useRef, useState, useEffect } from "react";

function AudioPlayer({
  validAudioURLs,
  handleAudioPause,
  audioSources,
  handleAudioPlay,
}) {
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleEnded = () => {
      if (currentAudioIndex < validAudioURLs.length - 1) {
        setCurrentAudioIndex((prevIndex) => prevIndex + 1);
        playAudio(validAudioURLs[currentAudioIndex + 1], currentAudioIndex + 1);
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded);
      return () => {
        audioRef.current.removeEventListener("ended", handleEnded);
      };
    }
  }, [validAudioURLs, currentAudioIndex]);

  const playAudio = (audioUrl, index) => {
    setCurrentAudioIndex(index);
    audioRef.current.src = audioUrl;
    audioRef.current.play();
  };

  return (
    <div className="flex justify-center items-center my-[20px] mt-[50px]">
      {validAudioURLs && validAudioURLs.length > 0 ? (
        <div>
          <audio
            controls
            ref={audioRef}
            onPlay={() => handleAudioPlay(currentAudioIndex)}
            onPause={handleAudioPause}
          >
            {audioSources}
          </audio>
        </div>
      ) : (
        <p>Audio topilmadi :(</p>
      )}
    </div>
  );
}

export default AudioPlayer;
