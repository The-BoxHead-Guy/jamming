import trackListImage from "../../../public/images/empty-tracklist-image.png";
import "./TrackList.css";

function TrackList({ trackList, addTrack }) {
  return (
    <>
      <div className="tracklist">
        {(trackList.length === 0 && <EmptyTrackList />) || (
          <TrackListRender tracksData={trackList} addTrack={addTrack} />
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
      {tracksData.map((track) => {
        return (
          <div className="tracklist__track" key={track.id} onClick={addTrack}>
            {track.name}
          </div>
        );
      })}
    </>
  );
}

export default TrackList;
