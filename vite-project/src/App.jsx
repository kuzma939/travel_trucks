import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../src/pages/CatalogPage/CatalogPage"));
const CamperDetailsPage = lazy(() =>
  import("../src/pages/CamperDetailPage/CamperDetailPage")
);

const NotFoundPage = lazy(() => import("../src/pages/NotFoundPage/NotFoundPage"));
function App() {
  return (
    <>
      <Header />
      <ErrorBoundary> {/* Обгортаємо в ErrorBoundary */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;