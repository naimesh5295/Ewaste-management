import Index from "views/Index.jsx";

import Profile from "views/examples/Profile.jsx";
import Icons from "views/examples/Icons.jsx";
import RetailerAdmin from "./views/Retailer/RetailerAdmin";
import LogisticAdmin from "./views/Logistics/LogisticAdmin";
import CompanyAdmin from "./views/Companies/CompanyAdmin";
import Issue from "./views/Companies/Issue.jsx"
import ImportToWallet from "./views/Companies/ImportToWallet.jsx"

import CompanyAdminCompletedProduct from "./views/Companies/CompanyAdminCompletedProduct";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-green",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/companycompleted",
    name: "Completed Products",
    icon: "ni ni-single-02 text-yellow",
    component: CompanyAdminCompletedProduct,
    layout: "/admin"
  },

  {
    path: "/company",
    name: "Companies",
    icon: "ni ni-single-02 text-yellow",
    component: CompanyAdmin,
    layout: "/admin"
  },
  {
    path:"/logistic",
    name:"Logistic",
    icon: "ni ni-delivery-fast text-green",
    component:LogisticAdmin,
    layout:"/admin"
  },
  {
    path:"/retailer",
    name:"Retailer",
    icon: "ni ni-delivery-fast text-green",
    component:RetailerAdmin,
    layout:"/admin"
  } ,
  {
    path:"/issue",
    name:"Issue card",
    icon: "ni ni-delivery-fast text-green",
    component:Issue,
    layout:"/admin"
  } ,
  {
    path:"/importcard",
    name:"Import card",
    icon: "ni ni-delivery-fast text-blue",
    component:ImportToWallet,
    layout:"/admin"
  } 
];




export default routes;
