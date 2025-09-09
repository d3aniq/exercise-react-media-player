import './app.css';
import Header from './components/Header';
import TrackList from './components/TrackList';
import NowPlaying from './components/NowPlaying';
import PlayerControls from './components/PlayerControls';
import { tracks as seed } from './data/tracks';
import { useState, useMemo } from 'react';

export default function App() {
  const [tracks] = useState(seed);
  const [current, setCurrent] = useState(tracks[0].id);
  const [playing, setPlaying] = useState(false);

  const idx = useMemo(() => tracks.findIndex(t => t.id === current), [tracks, current]);
  const track = tracks[idx];

  const prev = () => setCurrent(tracks[(idx - 1 + tracks.length) % tracks.length].id);
  const next = () => setCurrent(tracks[(idx + 1) % tracks.length].id);

  return (
    <div className="app">
      <aside className="panel">
        <Header title="Playlist – Moody" />
        <TrackList tracks={tracks} currentId={current} onSelect={setCurrent} />
      </aside>
      <main className="panel">
        <Header title="Now Playing" />
        <NowPlaying track={track} />
        <PlayerControls
          isPlaying={playing}
          onPrev={prev}
          onPlayPause={() => setPlaying(p => !p)}
          onNext={next}
        />
      </main>
    </div>
  );
}
