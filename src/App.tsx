import { Route, Routes } from "react-router-dom";

import { HomePage } from "pages/Home/HomePage";
import { GamePage } from "pages/Game/GamePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </>
  );
};

export default App;
