import { useEffect , useState } from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import AnudaMartFooter from "./Buyer/componenets/martFooter/AnudaMartFooter";
import AnudaMartHeader from "./Buyer/componenets/martHeader/AnudaMartHeader";
import SideNav from "./Buyer/sideNav/SideNav";
import { toggleNavbar } from "./Buyer/slices/NavBarSlice";
import { useDispatch, useSelector } from "react-redux";
import MobileFooter from "./Buyer/componenets/martFooter/MobileFooter";
import MobileHeader from "./Buyer/componenets/martHeader/MobileHeader";

import "./index.css";

function App() {
  const [showFooterAndHeader, setShowFooterAndHeader] = useState(true);
  const [lastPath, setLastPath] = useState("");
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const toggleNav = useSelector((state) => state.showNav);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setLastPath(location.pathname);
    if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
      setShowFooterAndHeader(false);
    } else {
      setShowFooterAndHeader(true);
    }

    if (location.pathname !== lastPath && toggleNav === true) {
      dispatch(toggleNavbar());
      setLastPath(location.pathname);
    }
  }, [location.pathname]);



  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setIsMobileWidth(true);
      } else {
        setIsMobileWidth(false);
      }
    }

    // Call handleResize initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <SideNav />

      {/* {!isMobileWidth ? (
        showFooterAndHeader && <AnudaMartHeader />
      ) : (
        showFooterAndHeader && <MobileHeader />
      )} */}
      <Outlet />
      {/* {  !isMobileWidth ? (
        showFooterAndHeader &&  <AnudaMartFooter />
      ) : (
        showFooterAndHeader &&  <MobileFooter />
      )} */}
      
    </>
  );
}

export default App;
