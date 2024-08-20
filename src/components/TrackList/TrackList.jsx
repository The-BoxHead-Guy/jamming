import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import trackListImage from "../../../public/images/empty-tracklist-image.png";
import "./TrackList.css";

function TrackList({ trackList, addSongToPlaylist }) {
  return (
    <>
      <div className="tracklist">
        {(trackList.length === 0 && <EmptyTrackList />) || (
          <>
            <TrackListResultTitle>Results</TrackListResultTitle>
            <TrackListRender
              tracksData={trackList}
              addSongToPlaylist={addSongToPlaylist}
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

function TrackListRender({ tracksData, addSongToPlaylist }) {
  return (
    <>
      <ul className="tracklist__tracks">
        {tracksData.map((track) => {
          return (
            <>
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
                <div
                  className="button-container"
                  key={track.id}
                  onClick={() => addSongToPlaylist(track)}
                >
                  <FontAwesomeIcon icon={faCirclePlus} />
                </div>
              </li>
            </>
          );
        })}
      </ul>
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
