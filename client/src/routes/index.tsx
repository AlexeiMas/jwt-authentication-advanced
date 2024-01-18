import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
} from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import PostsPage from "../pages/PostsPage"
import { ERoute } from "./constants"
import PrivateLayout from "@/layouts/PrivateLayout"
import MainLayout from "@/layouts/MainLayout"

const Routes = () => {
  const routesForPublic: RouteObject[] = [
    {
      element: <MainLayout />,
      children: [
        {
          path: ERoute.LoginPage,
          element: <LoginPage />,
        },
        {
          path: ERoute.RegisterPage,
          element: <RegisterPage />,
        },
        {
          path: "*",
          element: <Navigate to={ERoute.LoginPage} />,
        },
      ],
    },
  ]

  const routesForAuthenticatedOnly: RouteObject[] = [
    {
      element: <PrivateLayout />,
      children: [
        {
          path: ERoute.PostsPage,
          element: <PostsPage />,
        },
      ],
    },
  ]

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
  ])

  return <RouterProvider router={router} />
}

export default Routes
