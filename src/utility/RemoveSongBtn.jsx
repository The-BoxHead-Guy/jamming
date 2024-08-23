import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

function RemoveSongBtn({ track, removeSongFromPlaylist }) {
  return (
    <div
      className="button-container"
      onClick={() => removeSongFromPlaylist(track)}
    >
      <FontAwesomeIcon icon={faCircleMinus} />
    </div>
  );
}

export default RemoveSongBtn;
