import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import LayoutAuth from "./layouts/LayoutAuth";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutAuth />}>
        <Route index element={<Dashboard />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
