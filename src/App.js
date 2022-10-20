import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
