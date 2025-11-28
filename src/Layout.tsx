import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-74px)] bg-[#EBEBEB]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
