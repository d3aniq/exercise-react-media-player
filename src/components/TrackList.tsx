import type { Track } from '../types';
import TrackItem from './TrackItem';

export default function TrackList({
  tracks,
  currentId,
  onSelect
}: { tracks: Track[]; currentId?: string; onSelect: (id: string) => void; }) {
  return (
    <div className="list">
      {tracks.map(t => (
        <TrackItem key={t.id} track={t} active={t.id===currentId} onSelect={onSelect} />
      ))}
    </div>
  );
}
