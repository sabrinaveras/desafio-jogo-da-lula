import { Route, Routes } from "react-router-dom";

import { Home } from "pages/Home/Home";
import { Game } from "pages/Game/Game";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </>
  );
};

export default App;
