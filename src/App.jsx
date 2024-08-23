import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import TrackList from "./components/TrackList/TrackList";
import PlayList from "./components/PlayList/PlayList";

import testData from "/public/test/data.json";

function App() {
  /* Logic */
  const [tracks, setTracks] = useState([...testData]);
  const [playlist, setPlaylist] = useState([]);

  function addSongToPlaylist(newSong) {
    setPlaylist((prevSongs) => [...prevSongs, newSong]);
  }

  function removeSongFromPlaylist(songToRemove) {
    setPlaylist((prevSongs) =>
      prevSongs.filter((song) => song !== songToRemove)
    );
  }

  return (
    <>
      <NavBar />
      <div className="app__container">
        <main>
          <TrackList trackList={tracks} addSongToPlaylist={addSongToPlaylist} />
          <PlayList
            playlistData={playlist}
            removeSongFromPlaylist={removeSongFromPlaylist}
          />
        </main>
      </div>
    </>
  );
}

export default App;
