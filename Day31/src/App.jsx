import { useRef, useState, useEffect } from "react";

import audio1 from "./assets/1.mp3";
import audio2 from "./assets/2.mp3";
import audio3 from "./assets/3.mp3";

import cover1 from "./assets/cover1.jpg";
import cover2 from "./assets/cover2.jpg";

const songs = [
  {
    title: "Electric Paradise",
    artist: "Voltage Dreams",
    src: audio1,
    cover: cover1,
  },
  {
    title: "Night Drive",
    artist: "Synth Wave",
    src: audio2,
    cover: cover2,
  },
  {
    title: "Lost Frequencies",
    artist: "Deep Chill",
    src: audio3,
    cover: cover2,
  },
];

export default function App() {
  const audioRef = useRef(null);

  const [songIndex, setSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  // ▶ Play / Pause
  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  // ⏭ Next
  const nextSong = () => {
    let nextIndex = shuffle
      ? Math.floor(Math.random() * songs.length)
      : (songIndex + 1) % songs.length;

    setSongIndex(nextIndex);
  };

  // ⏮ Prev
  const prevSong = () => {
    setSongIndex(songIndex === 0 ? songs.length - 1 : songIndex - 1);
  };

  // 🔁 Ended
  const handleEnded = () => {
    if (repeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      nextSong();
    }
  };

  // ▶ Auto play on song change
  useEffect(() => {
    if (isPlaying) audioRef.current.play();
  }, [songIndex]);

  // ⏱ Time format
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="w-[330px] bg-white/10 backdrop-blur-xl rounded-2xl p-5 text-white shadow-2xl">

        {/* Cover */}
        <img
          src={songs[songIndex].cover}
          className="w-full h-[220px] object-cover rounded-xl mb-4"
        />

        {/* Info */}
        <h2 className="text-lg font-semibold text-center">
          {songs[songIndex].title}
        </h2>
        <p className="text-sm text-gray-300 text-center mb-4">
          {songs[songIndex].artist}
        </p>

        {/* Progress */}
        <div className="flex items-center gap-2 text-xs">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) =>
              (audioRef.current.currentTime = e.target.value)
            }
            className="flex-1 accent-pink-500"
          />
          <span>{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-5">
          <button
            onClick={() => setShuffle(!shuffle)}
            className={`text-xl ${shuffle ? "text-pink-400" : ""}`}
          >
            🔀
          </button>

          <button onClick={prevSong} className="text-xl">
            ⏮
          </button>

          <button
            onClick={togglePlay}
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-2xl shadow-lg"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button onClick={nextSong} className="text-xl">
            ⏭
          </button>

          <button
            onClick={() => setRepeat(!repeat)}
            className={`text-xl ${repeat ? "text-pink-400" : ""}`}
          >
            🔁
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2 mt-5">
          <span>🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => {
              audioRef.current.volume = e.target.value;
              setVolume(e.target.value);
            }}
            className="flex-1 accent-purple-500"
          />
        </div>

        {/* Audio */}
        <audio
          ref={audioRef}
          src={songs[songIndex].src}
          onLoadedMetadata={() =>
            setDuration(audioRef.current.duration) 
          }
          onTimeUpdate={() =>
            setCurrentTime(audioRef.current.currentTime)
          }
          onEnded={handleEnded}
        />
      </div>
    </div>
  );
}
