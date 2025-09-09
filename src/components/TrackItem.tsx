import type { Track } from '../types';

type Props = {
  track: Track;
  active?: boolean;
  onSelect: (id: string) => void;
};

export default function TrackItem({ track, active, onSelect }: Props) {
  return (
    <div className="item" onClick={() => onSelect(track.id)} aria-current={active}>
      <img src={track.cover} alt={track.title} width={56} height={56} style={{borderRadius:12}} />
      <div className="meta">
        <div className="title">{track.title}</div>
        <div className="artist">{track.artist}</div>
      </div>
      <span className="material-symbols-outlined">{active ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
    </div>
  );
}
