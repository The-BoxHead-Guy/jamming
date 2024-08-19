import "./PlayList.css";

function PlayList({ playlistData, title }) {
  return (
    <>
      <PlayListRender playlistData={playlistData}>{title}</PlayListRender>
    </>
  );
}

function PlayListRender({ playlistData }) {
  return (
    <>
      <div className="playlist">
        <PlayListTitle>Playlist</PlayListTitle>

        {playlistData.length !== 0 ? (
          playlistData.map((song) => {
            return (
              <div className="song" key={song.id}>
                {song.name}
              </div>
            );
          })
        ) : (
          <PlayListEmpty />
        )}
      </div>
    </>
  );
}

function PlayListTitle({ children }) {
  return (
    <div className="playlist__title">
      <h2>{children}</h2>
    </div>
  );
}

export default PlayList;
