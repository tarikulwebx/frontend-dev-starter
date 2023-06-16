import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<header className="">
				<h1 className="font-bold text-3xl my-2 px-8">RootLayout</h1>
				<ul className="flex items-center gap-4 bg-gray-100 py-3 px-8">
					<li>
						<NavLink to="/" className="[&.active]:text-primary">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className="[&.active]:text-primary"
						>
							About
						</NavLink>
					</li>
				</ul>
			</header>
			<main className="p-8">
				<Outlet />
			</main>
			<footer className="p-8 bg-gray-100">
				<h3 className="font-bold text-xl mb-2">
					Basic Frontend Development Starter <br /> with following
					libraries
				</h3>
				<ul className="flex divide-x-2 divide-gray-300">
					<li className="px-3 first:pl-0 last:pr-0">React JS</li>
					<li className="px-3 first:pl-0 last:pr-0">React Router</li>
					<li className="px-3 first:pl-0 last:pr-0">Prop Types</li>
					<li className="px-3 first:pl-0 last:pr-0">Vite</li>
					<li className="px-3 first:pl-0 last:pr-0">TailwindCSS</li>
					<li className="px-3 first:pl-0 last:pr-0">React Icons</li>
					<li className="px-3 first:pl-0 last:pr-0">Headless UI</li>
					<li className="px-3 first:pl-0 last:pr-0">Axios</li>
				</ul>
			</footer>
		</>
	);
};

export default RootLayout;
