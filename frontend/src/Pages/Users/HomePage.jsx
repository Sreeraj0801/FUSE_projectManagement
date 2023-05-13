import React, { lazy, Suspense} from "react";
import NavBarSkelton from "../../Components/Skelton/NavBarSkelton";
import AsideSkelton from "../../Components/Skelton/AsideSkelton";
import BodySkelton from "../../Components/Skelton/BodySkelton";


const AsideNavbar = lazy(() =>
  import("../../Components/AsideNavbar/AsideNavbar")
);
const NavBar = lazy(() => import("../../Components/NavBarCmp/NavBar"));
const HomeCmp = lazy(() => import("../../Components/HomeCmp/HomeCmp"));

const HomePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {
        <Suspense fallback={<AsideSkelton />}>
          <AsideNavbar />
        </Suspense>
      }
      <div className="w-full">
        {
          <Suspense fallback={<NavBarSkelton />}>
            <NavBar />
          </Suspense>
        }
        {
          <Suspense fallback={<BodySkelton />}>
            <HomeCmp />
          </Suspense>
        }
      </div>
    </div>
  );
};

export default HomePage;
