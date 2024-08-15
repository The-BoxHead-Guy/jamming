import musicLogo from "../../../public/icons/music.png";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="navBar__container">
        <img src={musicLogo} alt="" />
        <h1>
          Ja<span>mmm</span>ing
        </h1>
        <form action="#">
          <input type="search" name="query" id="search-bar" />
          <button type="submit">search</button>
        </form>
      </div>
    </>
  );
}

export default NavBar;
