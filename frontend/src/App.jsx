import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { ExpensesProvider } from "./contexts/expensesContext";
import LayoutAuth from "./layouts/LayoutAuth";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import AddExpensePage from "./pages/AddExpensePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutAuth />}>
        <Route index element={<ExpensesProvider><HomePage /></ExpensesProvider>} />
        <Route path="/new" element={<ExpensesProvider><AddExpensePage /></ExpensesProvider>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
