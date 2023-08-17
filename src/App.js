import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
   RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile/:username",
    element: <Profile />,
  },
]);



const App = () => {
  return < RouterProvider router={router}/>


}

export default App;
