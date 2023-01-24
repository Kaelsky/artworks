import { Route, Routes } from "react-router-dom";
import Artwork from "./components/Artwork/Artwork";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/artwork/:id" element={<Artwork />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
