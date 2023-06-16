import { Route } from "react-router-dom";
import { RootLayout } from "../layouts";
import { About, Error404, Home, Loader } from "../pages";

const AllRoutes = (
	<Route
		path="/"
		element={<RootLayout />}
		loader={Loader}
		errorElement={<Error404 />}
	>
		<Route index element={<Home />} />
		<Route path="about" element={<About />} />
	</Route>
);

export default AllRoutes;
