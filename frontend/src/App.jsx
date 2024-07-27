import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import LayoutAuth from "./layouts/LayoutAuth";
import WelcomePage from "./pages/WelcomePage";
import NotFound from "./pages/NotFound";
import DashboardPage from "./pages/DashboardPage";
import { ExpensesProvider } from "./contexts/expensesContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutAuth />}>
        <Route index element={<ExpensesProvider><DashboardPage /></ExpensesProvider>} />
        <Route path="/welcome" element={< WelcomePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
