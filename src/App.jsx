import "./App.css";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";
import CreateRaffles from "./pages/createRaffles";
import Home from "./pages/home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/create",
    element: <CreateRaffles />,
  },
]);

function App() {
  return (
    <>
      <Navbar />

      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
