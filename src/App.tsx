import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./shared/components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieInfoPage } from "./pages/MovieInfoPage/MovieInfoPage";
import { LoginAndRegistrPage } from "./pages/LoginAndRegistrPage/LoginAndRegistrPage";
import { UserPage } from "./pages/UserPage/UserPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies/:id" element={<MovieInfoPage />} />
          <Route path="login&registration" element={<LoginAndRegistrPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
