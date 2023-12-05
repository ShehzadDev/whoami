import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <router.Route path="/about">
        <About />
      </router.Route>
      <router.Route path="/projects">
        <Projects />
      </router.Route>
      <router.Route path="/contact">
        <Contact />
      </router.Route>
      <router.Route exact path="/">
        <Home />
      </router.Route>
      <Footer />
    </RouterProvider>
  );
}
