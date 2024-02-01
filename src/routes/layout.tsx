import { createBrowserRouter } from "react-router-dom";
import { Root } from "./home/Root";
import ErrorPage from "./error/error-page";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
        
    }
])