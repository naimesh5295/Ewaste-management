import Login from "views/examples/Login.jsx";
import Register from "./views/examples/Register";


var routes = [
 {
    path:"/Login",
    name:"Seller",
    icon: "ni ni-delivery-fast text-green",
    component:Login,
    layout:"/auth"
  },
  {
    path:"/register",
    name:"CompanyForm",
    icon: "ni ni-delivery-fast text-green",
    component:Register,
    layout:"/auth"
  }

];

export default routes