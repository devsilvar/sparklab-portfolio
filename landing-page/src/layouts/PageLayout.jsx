import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";
import Navbar from "../components/Navbar";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default PageLayout;
