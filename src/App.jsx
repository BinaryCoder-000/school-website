import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const PrincipalMessage = lazy(() => import("./pages/PrincipalMessage"));
const Academics = lazy(() => import("./pages/Academics"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Admissions = lazy(() => import("./pages/Admissions"));
const NoticesEvents = lazy(() => import("./pages/NoticesEvents"));
const Contact = lazy(() => import("./pages/Contact"));

function RouteFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 text-sm text-slate-500 sm:px-6">
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="principal-message" element={<PrincipalMessage />} />
            <Route path="academics" element={<Academics />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="admissions" element={<Admissions />} />
            <Route path="notices" element={<NoticesEvents />} />
            <Route path="contact" element={<Contact />} />
            {/* Legacy paths from the previous site structure */}
            <Route path="home/about" element={<Navigate to="/about" replace />} />
            <Route
              path="home/features"
              element={<Navigate to="/academics" replace />}
            />
            <Route
              path="home/loginpage"
              element={<Navigate to="/" replace />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
