import "./PlayList.css";
import SongList from "../../utility/SongList";
import { useState } from "react";

function PlayList({ playlistData, removeSongFromPlaylist }) {
  return (
    <>
      <PlayListRender
        playlistData={playlistData}
        removeSongFromPlaylist={removeSongFromPlaylist}
      />
    </>
  );
}

function PlayListRender({ playlistData, removeSongFromPlaylist }) {
  const align = !playlistData.length
    ? { alignItems: "center" }
    : { alignItems: "flex-start" };

  const [playListName, setPlayListName] = useState("");

  function changePlayListName(e) {
    setPlayListName(e.target.value);
  }

  return (
    <>
      <div className="playlist">
        <PlayListTitle
          playListName={playListName}
          changePlayListName={changePlayListName}
        />

        <div className="playlist__tracks" style={align}>
          {playlistData.length !== 0 ? (
            <SongList
              tracksData={playlistData}
              removeSongFromPlaylist={removeSongFromPlaylist}
              isTrackSong={false}
            />
          ) : (
            <PlayListEmpty />
          )}
        </div>

        {playlistData.length !== 0 && (
          <PlayListButton>Add to playlist</PlayListButton>
        )}
      </div>
    </>
  );
}

function PlayListTitle({ playListName, changePlayListName }) {
  return (
    <div className="playlist__title">
      <input
        type="text"
        value={playListName}
        onChange={(e) => changePlayListName(e)}
        placeholder="Enter playlist name"
        className="playlist__title"
      />
    </div>
  );
}

function PlayListButton({ children }) {
  return (
    <div className="playlist__actions">
      <button className="btn">{children}</button>
    </div>
  );
}

function PlayListEmpty() {
  return (
    <div className="playlist__empty">
      <p>Add your favorite songs to the playlist</p>
    </div>
  );
}

export default PlayList;
