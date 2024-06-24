import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { LoginPage } from "./pages/login";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <LoginPage /> },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
