import FavoritesProvider from "./contexts/Favorites";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import PagNotFound from "./pages/PagNotFound";
import Search from "./pages/Serach";
import Watch from "./pages/Watch";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "watch/:id",
        element: <Watch />,
    },
    {
        path: "search",
        element: <Search />,
    },

    {
        path: "favorites",
        element: <Favorites />,
    },

    {
        path: "*",
        element: <PagNotFound />,
    },



]);

function AppRoutes() {
    return (
        <>
            <FavoritesProvider>
                <RouterProvider router={router} />
            </FavoritesProvider>
        </>
    );
}

export default AppRoutes;