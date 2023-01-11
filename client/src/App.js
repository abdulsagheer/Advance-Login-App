import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Password from "./components/Password";
import Profile from "./components/Profile";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Username from "./components/Username";

// Rooot Routes
const router = createBrowserRouter([
	{
		path: "/",
		element: <Username></Username>,
	},
	{
		path: "/register",
		element: <Register></Register>,
	},
	{
		path: "/password",
		element: <Password></Password>,
	},
	{
		path: "/*",
		element: <Reset></Reset>,
	},
	{
		path: "/profile",
		element: <Profile></Profile>,
	},
	{
		path: "/recovery",
		element: <Recovery></Recovery>,
	},
	{
		path: "/pagenotfound",
		element: <PageNotFound></PageNotFound>,
	},
]);

function App() {
	return (
		<main>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</main>
	);
}

export default App;
