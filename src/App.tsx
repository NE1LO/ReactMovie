import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./shared/components/SharedLayout/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieInfoPage } from "./pages/MovieInfoPage/MovieInfoPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/:id" element={<MovieInfoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
