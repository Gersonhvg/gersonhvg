import { useRoutes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const RoutesContainer = () => {
    const routes = useRoutes([
        {path: "/", element: <Home /> },
        {path: "*", element: <NotFound /> },
    ]);
    return routes;
}

export default RoutesContainer;