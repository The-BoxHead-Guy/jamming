import trackListImage from "../../../public/images/empty-tracklist-image.png";
import "./TrackList.css";
import SongList from "../../utility/SongList";

function TrackList({ trackList, addSongToPlaylist }) {
  return (
    <>
      <div className="tracklist">
        {(trackList.length === 0 && <EmptyTrackList />) || (
          <>
            <TrackListResultTitle>Results</TrackListResultTitle>
            <SongList
              tracksData={trackList}
              addSongToPlaylist={addSongToPlaylist}
              isTrackSong={true}
            />
          </>
        )}
      </div>
    </>
  );
}

function EmptyTrackList() {
  return (
    <>
      <div className="tracklist__empty">
        <img src={trackListImage} alt="" />
        <p>No tracks</p>
      </div>
    </>
  );
}

function TrackListResultTitle({ children }) {
  return (
    <div className="tracklist__title">
      <h2>{children}</h2>
    </div>
  );
}

export default TrackList;
