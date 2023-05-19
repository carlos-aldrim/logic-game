import React from "react";
import minhaMusica from "assets/music/MusicaApp.mp3";
import { BrowserRouter } from "react-router-dom";

interface AudioMusicProps { 
  children: JSX.Element;
};

export const AudioMusic: React.FC<AudioMusicProps> = ({ children }) => {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div onClick={handleButtonClick}>
      <audio ref={audioRef} src={minhaMusica} loop />
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </div>
  );
};