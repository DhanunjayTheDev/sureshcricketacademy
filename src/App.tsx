import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/layout/Layout";
import PageTransition from "./components/layout/PageTransition";
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const AboutCoach = lazy(() => import("./pages/AboutCoach"));
const Programs = lazy(() => import("./pages/Programs"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                }
              />
              <Route
                path="/about-coach"
                element={
                  <PageTransition>
                    <AboutCoach />
                  </PageTransition>
                }
              />
              <Route
                path="/programs"
                element={
                  <PageTransition>
                    <Programs />
                  </PageTransition>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PageTransition>
                    <Gallery />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
              <Route
                path="*"
                element={
                  <PageTransition>
                    <NotFound />
                  </PageTransition>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}
