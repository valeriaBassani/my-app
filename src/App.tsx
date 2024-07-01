import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import ErrorPage from "./pages/error-page";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './components/footer/Footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    // children: [ se voglio che il link venga aperto nella stessa pagina, ma, per esempio, in una sezione diversa
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    // ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}