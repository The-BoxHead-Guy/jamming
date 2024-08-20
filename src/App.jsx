import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import TrackList from "./components/TrackList/TrackList";
import PlayList from "./components/PlayList/PlayList";

import testData from "/public/test/data.json";

function App() {
  /* Logic */
  const [tracks, setTracks] = useState([...testData]);
  const [playlist, setPlaylist] = useState([]);

  function addTrack(newTrack) {
    setTracks((prevTracks) => [...prevTracks, newTrack]);
  }

  return (
    <>
      <NavBar />
      <div className="app__container">
        <main>
          <TrackList trackList={tracks} addTrack={addTrack} />
          <PlayList playlistData={playlist} />
        </main>
      </div>
    </>
  );
}

export default App;
