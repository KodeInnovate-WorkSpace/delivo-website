import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeleteAccount from "./pages/delete_account.page";
import HomePage from "./pages/home.page";
import { Toaster } from "react-hot-toast";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/deleteaccount",
    element: <DeleteAccount />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter}>
      </RouterProvider>
    </>
  );
}

export default App;
