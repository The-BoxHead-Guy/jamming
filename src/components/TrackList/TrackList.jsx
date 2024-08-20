import trackListImage from "../../../public/images/empty-tracklist-image.png";
import "./TrackList.css";

function TrackList({ trackList, addTrack }) {
  return (
    <>
      <div className="tracklist">
        {(trackList.length === 0 && <EmptyTrackList />) || (
          <>
            <TrackListResultTitle>Results</TrackListResultTitle>
            <TrackListRender tracksData={trackList} addTrack={addTrack} />
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

function TrackListRender({ tracksData, addTrack }) {
  return (
    <>
      <ul className="tracklist__tracks">
        {tracksData.map((track) => {
          return (
            <>
              <li
                className="tracklist__track"
                key={track.id}
                onClick={addTrack}
              >
                <div className="order">
                  <div className="superior">
                    <p className="track-name">{track.name}</p>
                  </div>
                  <div className="inferior">
                    <p className="track-artist">{track.artist}</p>
                    <p className="track-album">{track.album}</p>
                  </div>
                </div>
                <div className="button-container" key={track.id}>
                  <button className="track-btn"></button>
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
