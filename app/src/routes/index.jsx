import { createBrowserRouter } from "react-router-dom";
import { SignInScreen } from "../layout/screens/sign-in/sign-in.screen.jsx";
import { RegisterScreen} from "../layout/screens/Register/register.screen.jsx";
import { HomeScreen } from "../layout/screens/Home/index.screen.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  }
]);
