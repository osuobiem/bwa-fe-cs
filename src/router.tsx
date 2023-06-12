import {createBrowserRouter} from "react-router-dom";
import {Search} from "./pages/Search/Search";

export const router = createBrowserRouter([
  {
    path: "/:keyword?",
    element: <Search />,
  },
]);
