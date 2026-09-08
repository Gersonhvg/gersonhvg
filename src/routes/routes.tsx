import { Route, useRoutes } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import Portfolio4 from "../pages/Example";
import Portfolio3 from "../pages/portfolio-backend-dev (1)";
import Portfolio2 from "../pages/portfolio-backend-dev";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const RoutesContainer = () => {
    const routes = useRoutes([
        {path: "/", element: <Home /> },
        {path: "*", element: <NotFound /> },

        //{path: "/4", element: <Portfolio4/>},
       //  {path: "/3", element: <Portfolio3/>},
       // {path: "/2", element: <Portfolio2/>},
        {path: "/404", element: <NotFound />},
       //{/* {path: "*", element: <Portfolio />},*/} 
       
    ]);
    return routes;
}

export default RoutesContainer;