import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { ExpensesProvider } from "./contexts/expensesContext";
import LayoutAuth from "./layouts/LayoutAuth";
// import WelcomePage from "./pages/WelcomePage";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ExpensePage from "./pages/ExpensePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutAuth />}>
        <Route index element={<ExpensesProvider><HomePage /></ExpensesProvider>} />
        <Route path="/expenses" element={<ExpensesProvider><ExpensePage /></ExpensesProvider>} />
        {/* <Route path="/welcome" element={< WelcomePage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
