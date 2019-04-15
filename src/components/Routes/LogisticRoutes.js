import Index from "views/Index.jsx";
import LogisticAdmin from "views/Logistics/LogisticAdmin.jsx";
import LogisticAddTrucker from "views/Logistics/LogisticAddTrucker.jsx"
import LogisticTruck from "views/Logistics/LogisticTruck.jsx"

import LogisticTrucker from "views/Logistics/LogisticTrucker.jsx"
import LogisticAddTruck from "views/Logistics/LogisticAddTruck.jsx"
import LogisticIndex from "views/Logistics/LogisticIndex.jsx"
import Shipment from "views/Logistics/Shipment.jsx"
import ShipmentStatusChange from "views/Logistics/ShipmentStatusChange.jsx"
import LogisticProfile from "views/Logistics/LogisticProfile.jsx"

var routes = [
  
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-green",
    component: LogisticIndex,
    layout: "/logistic"
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-tv-2 text-yellow",
    component: LogisticProfile,
    layout: "/logistic"
  }, 
 
  {
    path: "/trucker",
    name: "Truckers",
    icon: "ni ni-tv-2 text-green",
    component: LogisticTrucker,
    layout: "/logistic"
  }, 
  {
    path: "/shipment",
    name: "Shipment",
    icon: "ni ni-tv-2 text-blue",
    component: Shipment,
    layout: "/logistic"
  },
  {
    path: "/shipmentstatus",
    name: "Shipment Status Change",
    icon: "ni ni-tv-2 text-blue",
    component: ShipmentStatusChange,
    layout: "/logistic"
  },
  {
    path: "/addtrucker",
    name: "Add Trucker",
    icon: "ni ni-tv-2 text-green",
    component: LogisticAddTrucker,
    layout: "/logistic"
  },
  {
    path: "/trucks",
    name: "Trucks",
    icon: "ni ni-tv-2 text-green",
    component: LogisticTruck,
    layout: "/logistic"
  },
  {
    path: "/addtruck",
    name: "Add Trucks",
    icon: "ni ni-tv-2 text-green",
    component: LogisticAddTruck,
    layout: "/logistic"
  },



];




export default routes;
