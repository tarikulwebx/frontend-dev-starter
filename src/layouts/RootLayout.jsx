import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const RootLayout = () => {
	return (
		<div className="flex min-h-screen flex-col ">
			<Header />
			<main className="my-6">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default RootLayout;
