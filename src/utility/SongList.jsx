import AddSongBtn from "./AddSongBtn";
import RemoveSongBtn from "./RemoveSongBtn";

function SongList({
  tracksData,
  addSongToPlaylist,
  removeSongFromPlaylist,
  isTrackSong,
}) {
  return (
    <>
      <ul className="tracklist__tracks">
        {tracksData.map((track) => {
          return (
            <li className="tracklist__track" key={track.id}>
              <div className="order">
                <div className="superior">
                  <p className="track-name">{track.name}</p>
                </div>
                <div className="inferior">
                  <p className="track-artist">{track.artist}</p>
                  <p className="track-album">{track.album}</p>
                </div>
              </div>
              {isTrackSong ? (
                <AddSongBtn
                  track={track}
                  addSongToPlaylist={addSongToPlaylist}
                />
              ) : (
                <RemoveSongBtn
                  track={track}
                  removeSongFromPlaylist={removeSongFromPlaylist}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SongList;
