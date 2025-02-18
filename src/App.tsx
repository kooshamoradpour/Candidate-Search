import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
// import CandidateSearch from './pages/CandidateSearch';
// import SavedCandidates from './pages/SavedCandidates';
import "./index.css"

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
