import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <header
        className={`top-0 z-30 w-full ${
          location.pathname === "/" ? "absolute" : "static rounded-xl bg-black"
        }`}
      >
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
