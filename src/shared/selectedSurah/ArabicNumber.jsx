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
  console.log(text);
  if (i === 0) {
    return (
      <>
        <div
          key={i}
          className={`font-Montserrat flex items-center justify-center text-center w-[100%] ${
            isAudioPlaying && currentAudioIndex === i ? "audio-playing" : ""
          }`}
        >
          <p className="text-[35px]">{text}</p>
        </div>
        <br />
      </>
    );
  } else {
    return (
      <>
        <div
          key={i}
          className={`font-Montserrat flex items-center justify-center text-center w-[100%] ${
            isAudioPlaying && currentAudioIndex === i ? "audio-playing" : ""
          }`}
        >
          <ArabicText getArabicNumerals={getArabicNumerals} i={i - 1} />
          <p className="text-[35px]">{text}</p>
        </div>
      </>
    );
  }
}

export default ArabicNumber;
