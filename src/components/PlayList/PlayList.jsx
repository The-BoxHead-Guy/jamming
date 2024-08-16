function PlayList({ playlistData }) {
  return (
    <>
      <PlayListRender playlistData={playlistData} />
    </>
  );
}

function PlayListRender({ playlistData }) {
  return (
    <>
      {playlistData.map((song) => {
        return (
          <>
            <div className="song" key={song.id}>
              {song.name}
            </div>
          </>
        );
      })}
    </>
  );
}

export default PlayList;
