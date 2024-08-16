import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import TrackList from "./components/TrackList/TrackList";
import PlayList from "./components/PlayList/PlayList";

import testData from "/public/test/data.json";

function App() {
  /* Logic */
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([...testData]);

  function addTrack(newTrack) {
    setTracks((prevTracks) => [...prevTracks, newTrack]);
  }

  return (
    <>
      <NavBar />
      <div className="app__container">
        <TrackList trackList={tracks} addTrack={addTrack} />
        <PlayList playlistData={playlist} />
      </div>
    </>
  );
}

export default App;
