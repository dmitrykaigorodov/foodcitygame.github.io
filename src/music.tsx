import { LucideMusic4, LucidePauseCircle, LucidePlayCircle } from "lucide-react";
import { useEffect, useState } from "react";

var audio = audio || new Audio('/lullaby.mp3');

export const Music = () => {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause()
    }
    return () => {
      audio.pause()
    }
  })

  return <>
    <LucideMusic4
      style={{ position: "relative", top: -2, color: '#888' }} />{' '}
    {
      playing && <>
        <span onClick={() => setPlaying(false)}>
          <LucidePauseCircle
            style={{ position: "relative", top: -2 }} /> Stop music
        </span>
      </>
    }
    {
      !playing && <>
        <span onClick={() => setPlaying(true)}>
          <LucidePlayCircle
            style={{ position: "relative", top: -2 }} /> Play music
        </span>
      </>
    }
  </>
}
