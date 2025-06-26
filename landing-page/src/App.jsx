import { Home, About, Contact, Dashbord } from "./sections";
import PageLayout from "./layouts/pagelayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <h1 className="underline">Hello</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
