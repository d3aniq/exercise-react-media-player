type Props = {
  isPlaying: boolean;
  onPrev: () => void; onPlayPause: () => void; onNext: () => void;
};

export default function PlayerControls({ isPlaying, onPrev, onPlayPause, onNext }: Props) {
  return (
    <div className="controls">
      <button className="icon" onClick={onPrev} aria-label="Previous">
        <span className="material-symbols-outlined">skip_previous</span>
      </button>
      <button className="icon play" onClick={onPlayPause} aria-label="Play/Pause">
        <span className="material-symbols-outlined">{isPlaying ? 'pause' : 'play_arrow'}</span>
      </button>
      <button className="icon" onClick={onNext} aria-label="Next">
        <span className="material-symbols-outlined">skip_next</span>
      </button>
    </div>
  );
}
