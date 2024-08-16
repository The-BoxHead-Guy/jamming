import NavBar from "./components/NavBar/NavBar";
import TrackList from "./components/TrackList/TrackList";
import PlayList from "./components/PlayList/PlayList";

function App() {
  /* Logic */

  return (
    <>
      <NavBar />
      <div className="app__container">
        <TrackList />
        <PlayList />
      </div>
    </>
  );
}

export default App;
