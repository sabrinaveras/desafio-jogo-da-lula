import { Route, Routes } from "react-router-dom";

import { HomePage } from "pages/Home/HomePage";
import { GamePage } from "pages/Game/GamePage";
import { EndGame } from "pages/EndGame/EndGame";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/end-game" element={<EndGame />} />
      </Routes>
    </>
  );
};

export default App;
