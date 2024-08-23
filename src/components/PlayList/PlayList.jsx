import "./PlayList.css";
import SongList from "../../utility/SongList";
import AddSongBtn from "../../utility/AddSongBtn";
import RemoveSongBtn from "../../utility/RemoveSongBtn";

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

  return (
    <>
      <div className="playlist">
        <PlayListTitle>Playlist</PlayListTitle>

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

function PlayListTitle() {
  return (
    <div className="playlist__title">
      <h2>My playlist</h2>
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
