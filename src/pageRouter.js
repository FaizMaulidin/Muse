import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Playlists from "./pages/playlists";
import Liked from "./pages/liked";
import Premium from "./pages/premium";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "playlists",
        element: <Playlists />
    },
    {
        path: "liked",
        element: <Liked />
    },
    {
        path: "premium",
        element: <Premium />
    }
])

export default Router