import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LayoutAuth from "./layouts/LayoutAuth";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutAuth />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
