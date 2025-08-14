import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import type { TRole } from "@/types";
import { role } from "@/constants/role";


export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
        {
            Component: About,
            path: "about"
        }
    ]
  },

  // ------------- admin ------------
  
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin",
    children: [{index: true, element: <Navigate to="/admin/analytics"/>},...generateRoutes(adminSidebarItems)]
  },

  // ------------- user ------------
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [...generateRoutes(userSidebarItems)]
  },
  {
    Component: Login,
    path: "/login"
  },
  {
    Component: Register,
    path: "/register"
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },
]);

