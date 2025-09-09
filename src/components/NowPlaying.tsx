import type { Track } from '../types';

export default function NowPlaying({ track }: { track: Track }) {
  const mins = Math.floor(track.duration/60), secs = (track.duration%60).toString().padStart(2,'0');
  return (
    <div className="nowplaying">
      <img className="cover" src={track.cover} alt={track.title} />
      <div style={{textAlign:'center'}}>
        <h2 style={{margin:'8px 0'}}>{track.title}</h2>
        <div style={{opacity:.8}}>{track.artist}</div>
      </div>
      <div className="scrubber">
        <span>0:40</span>
        <div className="bar"><i /></div>
        <span>{mins}:{secs}</span>
      </div>
    </div>
  );
}
