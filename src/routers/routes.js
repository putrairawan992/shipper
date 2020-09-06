import PATH_URL from "./path";
import Beranda from "../pages/Beranda";
import Sidebar from "../layouts/Sidebar";
import DriverManagement from "../pages/DriverManagement";
import Pickup from "../pages/Pickup";

const routes = [
  {
    path: PATH_URL.HOME_BERANDA,
    component: Beranda,
    layout: Sidebar,
  },
  {
    path: PATH_URL.DRIVER_MANAGEMENT,
    component: DriverManagement,
    layout: Sidebar,
  },
  {
    path: PATH_URL.PICKUP,
    component: Pickup,
    layout: Sidebar,
  },
];

export default routes;
