import { createBrowserRouter } from "react-router-dom";
import { WilderGrid } from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WilderGrid />,
  },
  {
    path: "addwilder",
    element: <div>About</div>,
  },
]);

export default router;
