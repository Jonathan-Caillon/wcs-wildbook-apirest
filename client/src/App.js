import "./App.css";
import { Header, Footer } from "./components";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
