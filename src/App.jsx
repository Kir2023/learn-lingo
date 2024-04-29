import { Loader } from "./components/Loader/Loader";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Teachers = lazy(() => import("./pages/TeachersPage/TeachersPage"));
const Favorite = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
