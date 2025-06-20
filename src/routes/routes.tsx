import { useRoutes } from "react-router-dom";
import Home from "../pages/Home/Home";

const RoutesContainer = () => {
    const routes = useRoutes([
        {path: "/", element: <Home />},
        {path: "*", element: <Home />}

    ]);
    return routes;
}

export default RoutesContainer;