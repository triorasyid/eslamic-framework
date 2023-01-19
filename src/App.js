import { Routes, Route } from "react-router-dom";
import { Home, Player, News, Profile } from "./pages";
import config from "./config.json";

function App() {

  const Auth = () => {
    window.location.href = `${config.domain.backend}/auth`;
  }

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/player" element={ <Player /> } />
      <Route path="/news" element={ <News /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/login" element={ <Auth /> } />
    </Routes>
  )
}

export default App
