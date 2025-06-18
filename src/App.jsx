import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeleteAccount from "./pages/delete_account.page";
import HomePage from "./pages/home.page";
import PrivacyPage from "./pages/privacy.page";
import MainLayout from "./mainlayout";
import TermsPage from "./pages/terms.page";
import AboutPage from "./pages/about.page";
import DeliveryPolicyPage from "./pages/delivery_policy.page";
import RefundPage from "./pages/refund_policy.page";
import CancellationPage from "./pages/cancellation_policy.page";


const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "deleteaccount", element: <DeleteAccount /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "cancellation", element: <CancellationPage /> },
      { path: "refund", element: <RefundPage /> },
      { path: "delierypolicy", element: <DeliveryPolicyPage /> },
    ],
  },
]);


function App() {
 return <RouterProvider router={myRouter} />;
  // return (
  //   <>
  //     <RouterProvider router={myRouter}></RouterProvider>
  //   </>
  // );
}

export default App;
