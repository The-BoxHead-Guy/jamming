import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function AddSongBtn({ track, addSongToPlaylist }) {
  return (
    <div className="button-container" onClick={() => addSongToPlaylist(track)}>
      <FontAwesomeIcon icon={faCirclePlus} />
    </div>
  );
}

export default AddSongBtn;
