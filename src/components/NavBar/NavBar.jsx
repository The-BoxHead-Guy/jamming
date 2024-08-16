import musicLogo from "../../../public/icons/music.png";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav__container">
        <div className="title__container">
          <img src={musicLogo} alt="" />
          <h1>
            Ja<span>mmm</span>ing
          </h1>
        </div>
        <form action="#" className="search-bar__container">
          <input type="search" name="query" id="search-bar" />
          <button type="submit">search</button>
        </form>
      </nav>
    </>
  );
}

export default NavBar;
