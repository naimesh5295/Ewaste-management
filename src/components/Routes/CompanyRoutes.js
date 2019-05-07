
import CompanyCreateWarehouse from "views/Companies/CompanyCreateWarehouse.jsx";
import CompanyIndex from "views/Companies/CompanyIndex.jsx";
import CompanyWarehouse from "views/Companies/CompanyWarehouse.jsx";
import companyAddProductWarehouse from "views/Companies/companyAddProductWarehouse.jsx";
import CompanyProfile from "views/Companies/CompanyProfile.jsx";
import companyProvideFund from "views/Companies/companyProvideFund.jsx";

import CompanyDashboard from "views/Companies/CompanyDashboard.jsx";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-green",
    component: CompanyIndex,
    layout: "/company"
  }, 
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-blue",
    component: CompanyProfile,
    layout: "/company"
  },
  {
    path: "/payment",
    name: "Transfer Fund",
    icon: "ni ni-tv-2 text-green",
    component: companyProvideFund,
    layout: "/company"
  },
  {
    path: "/addproduct",
    name: "Product Warehouse",
    icon: "ni ni-tv-2 text-green",
    component: companyAddProductWarehouse,
    layout: "/company"
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    icon: "ni ni-tv-2 text-green",
    component: CompanyWarehouse,
    layout: "/company"
  },
  {
    path: "/createwarehouse",
    name: "Create Warehouse",
    icon: "ni ni-tv-2 text-green",
    component: CompanyCreateWarehouse,
    layout: "/company"
  }

];




export default routes;
