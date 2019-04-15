import Index from "views/Index.jsx";
import RetailerAddProduct from "views/Retailer/RetailerAddProduct.jsx"

import Profile from "views/examples/Profile.jsx";
import Icons from "views/examples/Icons.jsx";
import RetailerDashboard from "views/Retailer/RetailerDashboard.jsx"
import RetailerAdmin from "views/Retailer/RetailerAdmin.jsx"
import Retailerproducts from "views/Retailer/Retailerproducts.jsx"
import RetailerIndex from "views/Retailer/RetailerIndex.jsx"

import RetailerProfile from "views/Retailer/RetailerProfile.jsx"


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-green",
    component: RetailerIndex,
    layout: "/retailer"
  },
  
   
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: RetailerProfile,
    layout: "/retailer"
  },
  {
    path: "/product",
    name: "Products",
    icon: "ni ni-single-02 text-yellow",
    component: Retailerproducts,
    layout: "/retailer"
  },
  {
    path: "/addproduct",
    name: "Add Product",
    icon: "ni ni-single-02 text-yellow",
    component: RetailerAddProduct,
    layout: "/retailer"
  }

  
  
 
];




export default routes;
