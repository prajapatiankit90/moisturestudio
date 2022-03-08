import Home from "../container/home/Home";
import Process from "../container/process/Process";
import About from "../container/about/About";
import Work from "../container/work/Work";
import Contact from "../container/contact/Contact";
import Invoice from "../container/invoice/Invoice";

const routeList = [
  {
    id: 1,
    path: "/",
    name: "home",
    icon: "",
    component: Home,
    isVisible: true,
    isAuth: false,
  },
  {
    id: 2,
    path: "/about",
    name: "about",
    icon: "",
    component: About,
    isVisible: true,
    isAuth: false,
  },
  {
    id: 3,
    path: "/process",
    name: "process",
    icon: "",
    component: Process,
    isVisible: true,
    isAuth: false,
  },
  {
    id: 4,
    path: "/work",
    name: "work",
    icon: "",
    component: Work,
    isVisible: true,
    isAuth: false,
  },
  {
    id: 5,
    path: "/contact",
    name: "contact",
    icon: "",
    component: Contact,
    isVisible: true,
    isAuth: false,
  },
  // Invoice
  {
    id: 5,
    path: "/invoice",
    name: "invoice",
    icon: "",
    component: Invoice,
    isVisible: false,
    isAuth: false,
  },
];

export default routeList;
