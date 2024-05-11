import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./shared/components/SharedLayout/SharedLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { MovieSearch } from "./pages/MovieSearch/MovieSearch";
import { LoginAndRegistrPage } from "./pages/LoginAndRegistrPage/LoginAndRegistrPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<MovieSearch />} />
          <Route path="login&registration" element={<LoginAndRegistrPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
