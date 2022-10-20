import { Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/movie/:id" element={<Detail />} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
    </Routes>
  );
}

export default App;
