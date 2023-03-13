import { createBrowserRouter } from "react-router-dom";
import { WilderGrid } from "../pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <WilderGrid />,
  },
]);

export default router;
