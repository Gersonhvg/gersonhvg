import { useRoutes } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import NotFound from "../pages/NotFound";

const RoutesContainer = () => {
    const routes = useRoutes([
        {path: "/", element: <Portfolio />},
        {path: "*", element: <Portfolio />},
        {path: "/404", element: <NotFound />},
    ]);
    return routes;
}

export default RoutesContainer;