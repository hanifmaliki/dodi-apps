import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
import Logs from "./Pages/Logs";
import PageWithMenu from "./Templates/PageWithMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWithMenu><Home /></PageWithMenu>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/user-list",
    element: <PageWithMenu><UserList /></PageWithMenu>,
  },
  {
    path: "/logs",
    element: <PageWithMenu><Logs /></PageWithMenu>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
