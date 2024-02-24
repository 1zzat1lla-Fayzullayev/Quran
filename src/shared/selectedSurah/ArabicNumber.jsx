import React from "react";
import ArabicText from "./ArabicText";
import AudioPlayer from "./AudioPlayer";

function ArabicNumber({
  isAudioPlaying,
  currentAudioIndex,
  i,
  getArabicNumerals,
  text,
}) {
  return (
    <>
      <div
        key={i}
        className={`font-Montserrat flex items-center justify-center text-center w-[100%] ${
          isAudioPlaying && currentAudioIndex === i ? "audio-playing" : ""
        }`}
      >
        <ArabicText getArabicNumerals={getArabicNumerals} i={i} />
        <p className="text-[35px]">{text}</p>
      </div>
    </>
  );
}

export default ArabicNumber;
